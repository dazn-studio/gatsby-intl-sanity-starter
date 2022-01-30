const path = require('path')
const { languages, defaultLanguage } = require('./config/i18h')

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page

  languages.forEach((lang) => {
    const { path, context } = page

    const linkPrefix = lang === defaultLanguage ? '' : lang
    const urlPrefix = linkPrefix ? '/' : ''

    const currentPath = `${urlPrefix}${linkPrefix}${path}`

    createPage({
      ...rest,
      path: currentPath,
      context: {
        ...context,
        locale: lang,
        linkPrefix,
      },
    })
  })
}

// Page creation hook (use localization wrapper here)
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createLocalePage(page, createPage)
}

async function createGeneralPages({ graphql, actions }) {
  const { createPage } = actions

  // 1. get a template for this page
  const pageTemplate = path.resolve('./src/templates/page.js')

  const pagesQuery = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          id
          _type
          blocks: _rawModules(resolveReferences: { maxDepth: 30 })
          slug {
            _type
            tr {
              _key
              _type
              current
            }
            se {
              _key
              _type
              current
            }
          }
        }
      }
    }
  `)

  // 3. Check errors
  if (pagesQuery.errors) throw pagesQuery.errors

  // 4. Create each page
  const pagesEdges = (pagesQuery.data.pages || {}).nodes || []

  pagesEdges.forEach((page) => {
    console.log(`Creating dynamic page for ${JSON.stringify(page.slug.tr.current)}`)

    languages.forEach((lang) => {
      const urlPrefix = lang === defaultLanguage ? '' : `/${lang}`
      const linkPrefix = lang === defaultLanguage ? '' : lang

      const currentPage = {
        path: `${urlPrefix}/${page.slug[lang].current}`,
        // The template to use when creating this page
        component: pageTemplate,
        context: {
          pageId: page.id,
          slug: page.slug[lang].current,
          locale: lang,
          linkPrefix,
          pageType: page._type,
          ...page,
        },
      }

      createPage(currentPage)
    })
  })
}

exports.createPages = async (params) => {
  // Create pages dynamically (and concurrently! speeds up build)
  await Promise.all([
    // General pages
    createGeneralPages(params),
  ])
}

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter with Sanity.io`,
    siteUrl: `https://gatsby-intl-sanity.vercel.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_API_TOKEN,
        watchMode: !isProd,
        // overlayDrafts: !isProd
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || '',
    //   },
    // },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00a8a6`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    `gatsby-plugin-root-import`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
  ],
}

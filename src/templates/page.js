import React from 'react'
import Layout from 'components/Layout'

const Page = (props) => {
  const { path, pageContext, preview = false, data } = props

  console.log('props', pageContext)
  const { blocks, id, linkPrefix, locale, pageId, pageType } = pageContext

  return <Layout>{path}</Layout>
}

export default Page

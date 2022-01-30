import React from 'react'
import { Global } from '@emotion/react'

import { globalStyles } from 'styles'

const Layout = (props) => {
  const { children } = props

  return (
    <>
      <Global styles={globalStyles} />

      {children}
    </>
  )
}

export default React.memo(Layout)

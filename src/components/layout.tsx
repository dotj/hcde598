import { graphql, StaticQuery } from 'gatsby'
import * as React from 'react'

import Header from './header'

const Layout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          width: '100%',
          paddingTop: '2rem'
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: '60rem',
            padding: '0px 1.0875rem 1.45rem',
          }}
        >
          {children}
        </div>
      </div>
    )}
  />
)

export default Layout

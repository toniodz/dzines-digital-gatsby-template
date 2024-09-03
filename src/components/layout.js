/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// Remove or comment out this line: import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container mx-auto px-4 py-8">
        <main>{children}</main>
        <footer className="mt-8 text-center text-gray-600">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" className="text-purple-600">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout

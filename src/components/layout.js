/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Profile from "./Profile"
// import { useStaticQuery, graphql } from "gatsby" 

const Layout = ({ children }) => {

  return (
  <>
    <asside>
      <Profile/>
    </asside>
    <main>{children}</main>
 </>)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

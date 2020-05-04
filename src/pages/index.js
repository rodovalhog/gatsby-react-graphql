import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HOME</h1>
    <ul>
      <li>
        <Link to="/about">About (Gatsby Link)</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage

//Esse e o cara que vai ser os posts

import React from 'react';
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const BlogList = props => {
const data = props.data
    return (
        <Layout>
        <SEO title="Home" />
          <PostItem data={data}/>
      </Layout>
    )

};

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            dscription
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
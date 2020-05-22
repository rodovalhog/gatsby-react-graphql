const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
};

//creates pages in my project
// esse metodo vai falar para o gatysby criar page de acordo com dados que iremos passar.

exports.createPages = ( { graphql, actions } ) => {
    const { createPage } = actions;

    return graphql(`
    query PostList {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            id
            frontmatter {
              background
              category
              date(locale: "pt-br", fromNow: true, formatString: "DD [de] MMMM [de] YYYY")
              dscription
              title
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
    `).then(result => {

        const posts = result.data.allMarkdownRemark.edges;

            posts.forEach( ({node}) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        // Data passed to context is available
                        // in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    },
                })
            })
            //Paginação dos posts.
            const postsPerPage = 2;
            const numPages = Math.ceil(posts.length / postsPerPage); //metodo para aredondar a conta para o numero maior
    
            Array.from({length: numPages}).forEach((_, index) => {
              createPage({
                path: index === 0 ? '/' : `/page/${index+1}`,
                component: path.resolve(`./src/templates/blog-list.js`),
                contex: {
                  limit: parseInt(postsPerPage),
                  skip: parseInt(index * postsPerPage),
                  numPages,
                  currentPages: index +1,
                }
              })
            })
        })
}

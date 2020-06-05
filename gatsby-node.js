const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

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
      value: `/blog/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions

/*  O graphql é um metodo assincrono, então fazemos a query, e tratamos o resultado dela como uma promise, onde iteramos todos os edges, que são os posts, e utilizamos o createPage para criar uma página com os dados de cada post, onde :

path: URL da página
component: template que será utilizado para criação da página
context: dados que quero passar pra dentro desse componente

# Criando as paginações


*/
  return graphql(`
  {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          fields {
            slug
          }
          id
          timeToRead
          wordCount {
            words
          }
          frontmatter {
            background
            category
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
            description
            title
            image
          }
        }
      }
    }
  }
  `).then(result => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          slug: node.fields.slug
        }
      })
    })

    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/blog/page/${index+1}`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index+ 1
        }
      })
    })

  })
}
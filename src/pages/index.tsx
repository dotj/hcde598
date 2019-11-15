import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import * as React from 'react'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'


interface PostNode {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      title: string
      description: string
      featuredImage: string
    }
    fields: {
      slug: string
    }
  }
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
    allMarkdownRemark: {
      edges: PostNode[]
    }
  }
}

class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>
        <SEO
          title="All projects"
          keywords={['digital', 'fabrication', 'uw']}
        />
        <Bio />
        <hr/>
        <h1>Course Assignments</h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const description = node.frontmatter.description
          return (
            <div key={node.fields.slug} style={{ paddingBottom: '1rem' }}>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {title}
              </Link>
              &nbsp;—&nbsp;
              {description}
              <br/>
              <small>{node.frontmatter.date}</small>
              <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 300) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`

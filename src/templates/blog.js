import { graphql } from 'gatsby';
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
    query(
        $slug: String!
    ) {
        contentfulBlog (
            slug: { 
                eq: $slug 
            } 
        ) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                references {
                    gatsbyImageData
                }
            }
        }
    }
`
const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.title
                const url = node.data.fallback.src
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlog.title}/>
           <h1>{props.data.contentfulBlog.title}</h1>
           <p>{props.data.contentfulBlog.publishedDate}</p>
           {documentToReactComponents(props.data.contentfulBlog.body.references.gatsbyImageData, options)}
        </Layout>
    )
}

export default Blog;

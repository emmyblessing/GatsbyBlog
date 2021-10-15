import { graphql } from 'gatsby';
import React from 'react';
import { renderRichText } from "gatsby-source-contentful/rich-text"

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
                raw
                references {
                    fixed(width: 750) {
                        width
                        height
                        src
                    }
                }
            }
        }
    }
`
const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = "Grass"
                const url = props.data.contentfulBlog.body.references[0].fixed.src
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlog.title}/>
           <h1>{props.data.contentfulBlog.title}</h1>
           <p>{props.data.contentfulBlog.publishedDate}</p>
           {renderRichText(props.data.contentfulBlog.body, options)}
        </Layout>
    )
}

export default Blog;

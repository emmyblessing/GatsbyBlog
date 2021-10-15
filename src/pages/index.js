import * as React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from "../components/head";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Welcome to Gatsby!</h1>
      <h2>My name is Emmanuel am a full stack developer</h2>
      <p>
        Need a developer?
        <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage;

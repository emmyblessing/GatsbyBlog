import { Link } from 'gatsby';
import React from 'react'
import Head from '../components/head';
import Layout from '../components/layout';

const aboutPage = () => {
	return (
		<Layout>
			<Head title="About"/>
			<h1>About Me.</h1>
			<p>About page will show here later</p>
			<p><Link to='/contact'>Want to work with me? Reach Out.</Link></p>
		</Layout>
	)
}

export default aboutPage;

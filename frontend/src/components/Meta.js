import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: "Welcome to PuterStuff",
	description: "One stop shop for pc parts",
	keywords: "computer parts, buy pc parts, pc build",
};

export default Meta;

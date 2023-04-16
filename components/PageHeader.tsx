import Head from "next/head";
import React from "react";

interface Props {
	title: string;
}

const PageHeader = ({ title }: Props) => {
	return (
		<Head>
			<title>{title}</title>
			<link rel="icon" href="/favicon.png" />
		</Head>
	);
};

export default PageHeader;

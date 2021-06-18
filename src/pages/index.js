import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { Layout, Seo, CustomedHeader, CustomedGridBox } from "components/common";
import { Contact, Offer, Location, About } from "components/landing";

import { getImage } from "gatsby-plugin-image"

const Home = () => {
	const { img } = useStaticQuery(
		graphql`
	query {
	  img:  file(relativePath: { eq: "PageHeaders/homeBg.jpg" }) {
		  childImageSharp {
			gatsbyImageData(
				width: 1200, 
				quality: 60, 
				webpOptions: {quality: 75})
			}
		  }
	}
	`
	);

	const backgroundImage = getImage(img);

	return (
		<Layout>
			<Seo />
			<CustomedHeader
				bgImage={backgroundImage}
				headerBg="rgba(0,0,0,0.5)"
				afterOpacity="0.3 !important"
				HeroHeight="55vh"
				HeroWidthMedia="100vh"
				HeroHeightMedia="100vh"
				backgroundImage={backgroundImage}
				HeroBrandName="Ventus Trade"
				HeroSubName="pojazdy & urządzenia"
			>
			</CustomedHeader>
			<Offer />
			<CustomedGridBox>
				<Contact />
				<Location />
			</CustomedGridBox>
			<About />

		</Layout>
	)
};

export default Home;

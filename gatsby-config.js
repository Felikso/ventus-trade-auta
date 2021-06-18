const config = require("./src/data/config");

require("dotenv").config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
		locationAdressRoute: config.locationAdressRoute,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-styled-components",
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: config.url,
			},
		},
		/* 		{
					resolve: "gatsby-source-graphql",
					options: {
						typeName: "GitHub",
						fieldName: "github",
						url: "https://api.github.com/graphql",
						headers: {
							Authorization: `bearer ${process.env.PORTFOLIO_GITHUB_TOKEN}`,
						},
						fetchOptions: {},
					},
				}, */
		{
			resolve: "gatsby-plugin-nprogress",
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		/* 		{
					resolve: "gatsby-plugin-google-analytics",
					options: {
						trackingId: config.googleAnalyticsID,
						head: true,
					},
				}, */
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.defaultTitle,
				short_name: "starter",
				start_url: "/",
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "minimal-ui",
				icon: "./static/favicon/favicon-512.png",
			},
		},
		/* 		`gatsby-plugin-netlify-cms`, */
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/blog`,
				name: `markdown-pages`,
			},
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-image`,
		/* 		{
					resolve: `gatsby-plugin-scroll-reveal`,
					options: {
						threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
						once: true, // Defines if animation needs to be launched once
						disable: false, // Flag for disabling animations
		
						// Advanced Options
						selector: '[data-sal]', // Selector of the elements to be animated
						animateClassName: 'sal-animate', // Class name which triggers animation
						disabledClassName: 'sal-disabled', // Class name which defines the disabled state
						rootMargin: '0% 50%', // Corresponds to root's bounding box margin
						enterEventName: 'sal:in', // Enter event name
						exitEventName: 'sal:out', // Exit event name
					}
				}, */
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `itemsData`,
				path: `./itemsData/`,
			},
		},
		`gatsby-transformer-sharp`,
		/* 		`gatsby-plugin-sitemap`, */
		`gatsby-transformer-json`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Ventus Trade Auta`,
				short_name: `VT Auta`,
				start_url: `/`,
				background_color: `#1409a0`,
				theme_color: `#1409a0`,
				display: `minimal-ui`,
				icon: `src/images/ventus-trade-logo.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-gatsby-cloud`,
		'gatsby-plugin-svgr',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `backgrounds`,
				path: `${__dirname}/src/homeSlider`, // wherever background images are stored
			},
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GCMS',
				fieldName: 'gcms',
				url: 'https://api-eu-central-1.graphcms.com/v2/ckph9x9yh6z7901xp3tjq8zem/master',
			}
		},
		{
			resolve: "gatsby-plugin-anchor-links",
			/* 			options: {
							offset: -100
						} */
		},
		/*  {
		   resolve: `gatsby-plugin-cookie-though`,
		   options: {
			 config: {
			   policies: [
				 {
				   id: "essential",
				   label: "Niezbędne ciasteczka",
				   description:
					 "Są one konieczne do właściwego funkcjonowania witryny internetowej.",
				   category: "essential",
				 },
				 {
				   id: "functional",
				   label: "Funkcjonalne ciasteczka",
				   category: "functional",
				   description:
					 "Pomagają nam w sprawdzaniu efektywności wdrażanych przez nas działań marketingowych, dostosowując je do indywidualnych preferencji użytkownika.",
				 },
				 {
				   id: "statistics",
				   label: "Analityczne ciasteczka",
				   category: "statistics",
				   description:
					 "Dzięki nim możemy dowiedzieć się, co cieszy się największym zainteresowaniem na naszych podstronach.",
				 },
				 {
				   id: "social",
				   label: "Społecznościowe ciasteczka",
				   category: "social",
				   description:
					 "Wykorzystujemy je w celu poprawienia efektywności podejmowanych przez nas działań marketingowych.",
				 },
			   ],
			   permissionLabels: {
				 accept: "Zaakceptuj",
				 acceptAll: "Zaakceptuj wszystkie",
				 decline: "Odrzuć",
			   },
			   cookiePreferenceKey: "cookie-preferences",
			   header: {
				 title: "Ciasteczka?",
				 subTitle: "Znowu to okienko...",
				 description:
				   "Każdy z pewnością chce pokazać się od jak najlepszej strony, również i my. Wykorzystanie ciasteczek daje nam na to gwarancję.",
			   },
			   cookiePolicy: {
				 url: "http://localhost:8000/polityka-prywatnosci",
				 label: "Przeczytaj całą deklarację",
			   },
			 },
		   },
		 }, */
		/*     {
			  resolve: `gatsby-plugin-sitemap`,
			  options: {
				output: `/sitemap.xml`,
			  }
			}, */
		/* 		'gatsby-plugin-robots-txt', */
		`gatsby-plugin-preact`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
			options: {
				devMode: true,
			},
		},
		"gatsby-plugin-offline",
	],
};

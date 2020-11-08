import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layouts/layout";
import Divider from "../components/dividers/main-divider";
import COLORS from "../styling/colors";
import darkTheme from "../styling/themes/dark-theme";
import lightTheme from "../styling/themes/light-theme";
import FONT_STYLES, { FONT_SIZES, FONT_FAMILY } from "../styling/font-styles";
import QuoteStart from "../images/icons/quote-start.svg";
import QuoteEnd from "../images/icons/quote-end.svg";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(10, 2),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(5, 2),
		},
	},
	subtitle: {
		...FONT_STYLES.subtitle,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.xSmall,
		},
	},
	header: {
		...FONT_STYLES.title,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.large,
		},
	},
	border: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: COLORS.blueGradient,
		padding: theme.spacing(1),
	},
	image: {
		width: "500px",
		height: "auto",
		margin: theme.spacing(0),
		[theme.breakpoints.down("xs")]: {
			width: "250px",
		},
	},
	text: {
		maxWidth: "900px",
		padding: theme.spacing(5),
		...FONT_STYLES.text,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.small,
			padding: theme.spacing(2),
		},
		"& > h1": {
			...FONT_STYLES.title,
			fontSize: FONT_SIZES.large,
		},
		"& > *": {
			color: COLORS.white,
			"& > *": {
				color: COLORS.white,
			},
		},
	},
	quote: {
		...FONT_STYLES.text,
		margin: theme.spacing(0, 5),
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.small,
			margin: theme.spacing(0, 2),
		},
		"& svg:first-child": {
			margin: theme.spacing(0, 1, 0, 0),
		},
		"& svg:nth-child(2)": {
			margin: theme.spacing(0, 0, 0, 1),
		},
	},
	author: {
		textAlign: "right",
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.small,
		},
	},
}));

export default function BlogPost({ data }) {
	const classes = useStyles();
	const MuiTheme = useTheme();
	const isMobile = useMediaQuery(MuiTheme.breakpoints.down("xs"));
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const [theme, setTheme] = useState(false);
	const [sectionIndex] = useState(0);
	const post = data.desktop_tablet;

	const topDirection = isTablet ? "column-reverse" : "row";
	const topSize = isTablet ? 12 : 6;

	if (typeof window !== "undefined") {
		require("smooth-scroll")('a[href*="#"]');
	}

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Hannah Ong Blog - {post.frontmatter.title}</title>
				<meta name="description" content={`${post.frontmatter.title}: ${post.frontmatter.description}`} />
			</Helmet>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Layout index={sectionIndex} onTheme={setTheme}>
					<Grid container direction="column" wrap="nowrap" className={classes.root} spacing={4}>
						<Grid container item direction={topDirection} alignItems="center" spacing={4}>
							{/* Top Left Section (Divider, Date, Title, Quote) */}
							<Grid container item direction="column" spacing={3} xs={topSize}>
								<Grid container item direction="column" spacing={4}>
									<Grid item>
										<Divider />
									</Grid>

									<Grid item>
										<Typography variant="h1" color="primary" className={classes.subtitle}>
											{post.frontmatter.date}
										</Typography>
									</Grid>
								</Grid>

								<Grid item>
									<Typography variant="h1" color="primary" className={classes.header}>
										{post.frontmatter.title}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="h1" color="primary" className={classes.quote}>
										<QuoteStart />
										{post.frontmatter.quote}
										<QuoteEnd />
										<br />
										<div className={classes.author}>—{post.frontmatter.quoteAuthor}</div>
									</Typography>
								</Grid>
							</Grid>

							{/* Top Right Section (Image) */}
							<Grid container item justify="center" xs={topSize}>
								<Box className={classes.border}>
									<Img
										fixed={
											isMobile
												? data.mobile_img.frontmatter.photo.childImageSharp.fixed
												: post.frontmatter.photo.childImageSharp.fixed
										}
										alt={post.frontmatter.title}
										className={classes.image}
									/>
								</Box>
							</Grid>
						</Grid>

						<Grid container item justify="center">
							<div dangerouslySetInnerHTML={{ __html: post.html }} className={classes.text} />
						</Grid>
					</Grid>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export const query = graphql`
	query($slug: String!) {
		desktop_tablet: markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				description
				date(formatString: "MMM DD, YYYY")
				quote
				quoteAuthor
				photo {
					childImageSharp {
						fixed(width: 500, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
		mobile_img: markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				photo {
					childImageSharp {
						fixed(width: 250, quality: 100) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
		}
	}
`;

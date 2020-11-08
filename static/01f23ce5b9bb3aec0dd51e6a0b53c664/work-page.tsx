import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layouts/layout";
import Divider from "../components/dividers/main-divider";
import MainButton from "../components/buttons/main-button";
import DesktopBar from "../images/icons/desktop-bar.svg";
import ArrowSvg from "../images/icons/scroll-arrow.svg";

import FONT_STYLES, { FONT_WEIGHT, FONT_SIZES } from "../styling/font-styles";
import COLORS from "../styling/colors";
import darkTheme from "../styling/themes/dark-theme";
import lightTheme from "../styling/themes/light-theme";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(10, 2),
		minHeight: "1000px",
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(5, 2),
		},
	},
	header: {
		...FONT_STYLES.title,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.large,
		},
	},
	text: {
		...FONT_STYLES.text,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.small,
		},
	},
	bold: {
		textTransform: "uppercase",
		fontWeight: FONT_WEIGHT.bold,
		margin: theme.spacing(0, 1, 0, 0),
	},
	scroll: {
		...FONT_STYLES.text,
		fontSize: "13px",
		textTransform: "uppercase",
		margin: theme.spacing(2, 0, 0, 0),
		[theme.breakpoints.down("sm")]: {
			margin: theme.spacing(0),
		},
	},
	relativeContainer: {
		position: "relative",
		width: "auto",
		maxWidth: "90%",
		margin: theme.spacing(5),
		[theme.breakpoints.down("sm")]: {
			margin: theme.spacing(5, 0, 0, 0),
		},
		[theme.breakpoints.down("xs")]: {
			margin: theme.spacing(5, 0),
		},
	},
	imageContainer: {
		overflowY: "scroll",
		width: "100%",
		maxHeight: "500px",
		padding: theme.spacing(0),
		borderRadius: "0px 0px 5px 5px",
		boxShadow: "0px 5px 50px 5px rgba(158, 158, 158, 0.25)",
		scrollbarWidth: "none",
		"&::-webkit-scrollbar": {
			display: "none",
		},
		[theme.breakpoints.down("sm")]: {
			maxHeight: "500px",
		},
		[theme.breakpoints.down("xs")]: {
			maxHeight: "200px",
		},
	},
	imageBar: {
		width: "100%",
		objectFit: "cover",
		borderRadius: "5px 5px 0px 0px",
	},
	image: {
		margin: theme.spacing(0),
		width: "100%",
		borderRadius: "0px 0px 5px 5px",
	},
	details: {
		"& *": {
			...FONT_STYLES.text,
			color: COLORS.white,
			[theme.breakpoints.down("xs")]: {
				fontSize: FONT_SIZES.small,
			},
		},
	},
}));

export default function WorkPost({ data }) {
	const classes = useStyles();
	const MuiTheme = useTheme();
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const isPhone = useMediaQuery(MuiTheme.breakpoints.down("xs"));
	const [theme, setTheme] = useState(false);
	const [sectionIndex] = useState(0);
	const post = data.markdownRemark;

	// Media Queries
	const direction = isTablet ? "column" : "row";
	const size = isTablet ? 12 : 6;

	if (typeof window !== "undefined") {
		require("smooth-scroll")('a[href*="#"]');
	}

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Hannah Ong Work - {post.frontmatter.title}</title>
				<meta name="description" content={`${post.frontmatter.title}: ${post.frontmatter.description}`} />
			</Helmet>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Layout index={sectionIndex} onTheme={setTheme}>
					<Grid
						id="blog"
						container
						direction={direction}
						justify="space-between"
						alignItems="center"
						className={classes.root}
						spacing={4}
					>
						{/* Left Section (Divider, Title, Description, Year, Tools) */}
						<Grid container item direction="column" spacing={4} xs={size}>
							<Grid item>
								<Divider />
							</Grid>

							<Grid item>
								<Typography variant="h1" color="primary" className={classes.header}>
									{post.frontmatter.title}
								</Typography>
							</Grid>

							<Grid item>
								<Typography color="primary" className={classes.text}>
									{post.frontmatter.description}
								</Typography>
							</Grid>

							<Grid item>
								<Typography color="primary" className={classes.text}>
									<span className={classes.bold}>Year:</span>
									{post.frontmatter.date}
								</Typography>
							</Grid>

							<Grid item>
								<Typography color="primary" className={classes.text}>
									<span className={classes.bold}>Tools:</span> {post.frontmatter.tools}
								</Typography>
							</Grid>

							<Grid item>
								<MainButton href={post.frontmatter.link} type="button" ariaLabel={`Go to ${post.frontmatter.title}`}>
									Go To Site
								</MainButton>
							</Grid>
						</Grid>

						{/* Right Section (Image) */}
						<Grid container item direction="column" alignItems="center" xs={size}>
							<Grid
								container
								item
								direction="column"
								alignItems="center"
								justify="center"
								className={classes.relativeContainer}
							>
								<DesktopBar className={classes.imageBar} />
								<Grid item className={classes.imageContainer}>
									<Img
										fluid={post.frontmatter.photo.childImageSharp.fluid}
										alt={post.frontmatter.title}
										className={classes.image}
									/>
								</Grid>
							</Grid>

							<Grid container item direction="column" alignItems="center">
								<Grid item>
									<Typography className={classes.scroll}>scroll</Typography>
								</Grid>
								<Grid item>
									<ArrowSvg />
								</Grid>
							</Grid>
						</Grid>

						{/* Bottom Section (details) */}
						<Grid item xs={12}>
							<div dangerouslySetInnerHTML={{ __html: post.html }} className={classes.details} />
						</Grid>
					</Grid>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				description
				date(formatString: "YYYY")
				tools
				link
				photo {
					childImageSharp {
						fluid(quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;

import React, { useEffect, useRef } from "react";

import Carousel from "../components/carousel/carousel";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import WorkButton from "../components/buttons/work-button";

import Divider from "../components/dividers/main-divider";

import FONT_STYLES, { FONT_SIZES } from "../styling/font-styles";

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(5, 0),
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
	carouselContainer: {
		position: "relative",
		minHeight: "450px",
		WebkitTransform: "translate3d(0, 0, 0)",
		[theme.breakpoints.down("xs")]: {
			WebkitTransform: "translate3d(0, 0, 0)",
			borderRadius: "25px",
			width: "100px",
			height: "100px",
		},
	},
	carouselButtonBase: {
		width: "580px",
		height: "365px",
		margin: theme.spacing(0, 2),
		boxShadow: "0px 0px 25px 3px rgba(255, 255, 255, 0.5)",
		transition: "box-shadow .6s ease",
		WebkitTransform: "translate3d(0, 0, 0)",
		[theme.breakpoints.down("xs")]: {
			WebkitTransform: "translate3d(0, 0, 0)",
			borderRadius: "25px",
			width: "100px",
			height: "100px",
		},
		"&:hover": {
			boxShadow: "0px 5px 25px 3px rgba(105, 129, 255, 0.5), 0px 0px 25px 3px rgba(209, 208, 255, 0.5)",
			transition: "box-shadow .6s ease",
		},
	},
	carouselItem: {
		WebkitTransform: "translate3d(0, 0, 0)",
		"&:hover > div": {
			display: "flex",
		},
	},
	image: {
		WebkitTransform: "translate3d(0, 0, 0)",
		position: "relative",
		margin: theme.spacing(0),
	},
	label: {
		WebkitTransform: "translate3d(0, 0, 0)",
		background: "rgba(0, 0, 0, 0.8)",
		position: "absolute",
		height: "100%",
		width: "100%",
		padding: theme.spacing(0, 10, 5, 5),
		display: "none",
	},
	cardTitle: {
		WebkitTransform: "translate3d(0, 0, 0)",
		...FONT_STYLES.subheader,
	},
	cardDescription: {
		WebkitTransform: "translate3d(0, 0, 0)",
		...FONT_STYLES.miniText,
		margin: theme.spacing(1, 0),
	},
	button: {
		WebkitTransform: "translate3d(0, 0, 0)",
		margin: theme.spacing(1, 0),
	},
	carousel: {
		WebkitTransform: "translate3d(0, 0, 0)",
		display: "flex",
		height: "400px",
		[theme.breakpoints.down("xs")]: {
			WebkitTransform: "translate3d(0, 0, 0)",
			height: "105px",
		},
	},
}));

export default function Work({ workRef }) {
	const classes = useStyles();
	const ref = useRef(null);
	const MuiTheme = useTheme();
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const isPhone = useMediaQuery(MuiTheme.breakpoints.down("xs"));

	const spacing = isPhone ? 2 : 4;

	useEffect(() => {
		if (ref) {
			workRef(ref.current.offsetTop);
		}
	}, [ref]);

	const data = useStaticQuery(graphql`
		query workQuery {
			allMarkdownRemark(
				filter: { fileAbsolutePath: { regex: "/.posts/work./" } }
				sort: { fields: frontmatter___date, order: DESC }
			) {
				edges {
					node {
						frontmatter {
							title
							description
							icon {
								childImageSharp {
									fixed(width: 105, height: 105, quality: 100) {
										...GatsbyImageSharpFixed
									}
								}
							}
							coverPhoto {
								childImageSharp {
									fixed(width: 580, height: 375, quality: 100) {
										...GatsbyImageSharpFixed
									}
								}
							}
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<>
			<Grid id="work" ref={ref} container item direction="column" spacing={spacing} className={classes.root}>
				<Grid container item direction="column" spacing={4}>
					<Grid item>
						<Divider />
					</Grid>

					<Grid item>
						<Typography variant="h1" color="primary" className={classes.subtitle}>
							Stuff I've been working on...
						</Typography>
					</Grid>
				</Grid>

				<Grid item>
					<Typography variant="h1" color="primary" className={classes.header}>
						Recent Work
					</Typography>
				</Grid>
			</Grid>

			<Grid container item className={classes.carouselContainer}>
				<Carousel className={classes.carousel}>
					{data.allMarkdownRemark.edges.map(({ node }, index) =>
						isPhone ? (
							<ButtonBase
								href={node.fields.slug}
								key={index}
								aria-label={`Go to ${node.frontmatter.title}`}
								className={classes.carouselButtonBase}
							>
								<Grid container key={index}>
									<Img
										fixed={node.frontmatter.icon.childImageSharp.fixed}
										alt={node.frontmatter.title}
										className={classes.image}
									/>
								</Grid>
							</ButtonBase>
						) : (
							<ButtonBase
								href={node.fields.slug}
								key={index}
								aria-label={`Go to ${node.frontmatter.title}`}
								className={classes.carouselButtonBase}
							>
								<Grid container key={index} className={classes.carouselItem}>
									<Img
										fixed={node.frontmatter.coverPhoto.childImageSharp.fixed}
										alt={node.frontmatter.title}
										className={classes.image}
									/>
									<Grid
										container
										item
										direction="column"
										alignItems="flex-start"
										justify="flex-end"
										className={classes.label}
									>
										<Typography color="primary" align="left" className={classes.cardTitle}>
											{node.frontmatter.title}
										</Typography>
										<Typography color="primary" align="left" className={classes.cardDescription}>
											{node.frontmatter.description}
										</Typography>
										<WorkButton href={node.fields.slug} ariaLabel={`Go to ${node.frontmatter.title}`}>
											Details
										</WorkButton>
									</Grid>
								</Grid>
							</ButtonBase>
						)
					)}
				</Carousel>
			</Grid>
		</>
	);
}

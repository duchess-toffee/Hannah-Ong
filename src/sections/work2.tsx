import React, { useEffect, useRef } from "react";

import Carousel from "../components/carousel/carousel";

import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import WorkButton from "../components/buttons/work-button";

import Divider from "../components/dividers/main-divider";

import FONT_STYLES, { FONT_SIZES } from "../styling/font-styles";
import COLORS from "../styling/colors";

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
		[theme.breakpoints.down("xs")]: {
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
		[theme.breakpoints.down("xs")]: {
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
		"&:hover > div": {
			display: "flex",
		},
	},
	image: {
		position: "relative",
		margin: theme.spacing(0),
	},
	label: {
		background: "rgba(0, 0, 0, 0.8)",
		position: "absolute",
		height: "100%",
		width: "100%",
		padding: theme.spacing(0, 10, 5, 5),
		display: "none",
	},
	cardTitle: {
		...FONT_STYLES.subheader,
	},
	cardDescription: {
		...FONT_STYLES.miniText,
		margin: theme.spacing(1, 0),
	},
	button: {
		margin: theme.spacing(1, 0),
	},
	carousel: {
		display: "flex",
		height: "400px",
		[theme.breakpoints.down("xs")]: {
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
		query workQuery2 {
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
								publicURL
							}
							coverPhoto {
								publicURL
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
							<ButtonBase href={node.fields.slug} key={index} className={classes.carouselButtonBase}>
								<Grid container key={index}>
									<img src={node.frontmatter.icon.publicURL} className={classes.image} />
								</Grid>
							</ButtonBase>
						) : (
							<ButtonBase href={node.fields.slug} key={index} className={classes.carouselButtonBase}>
								<Grid container key={index} className={classes.carouselItem}>
									<img
										src={node.frontmatter.coverPhoto.publicURL}
										className={classes.image}
										style={{
											width: "580px",
											height: "365px",
										}}
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
										<WorkButton href={node.fields.slug}>Details</WorkButton>
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

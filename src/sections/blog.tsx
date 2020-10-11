import React, { useEffect, useRef } from "react";

import { useStaticQuery, graphql } from "gatsby";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import Divider from "../components/dividers/main-divider";
import FONT_STYLES, { FONT_SIZES } from "../styling/font-styles";
import COLORS from "../styling/colors";

import Arrow from "../images/icons/blog-post-arrow.svg";

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(10, 0),
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
		background: COLORS.blueGradient,
		margin: theme.spacing(3),
		padding: theme.spacing(0.25),
		transition: "all .6s ease",
		width: "90%",
		"&:hover": {
			boxShadow: "0px 5px 25px 3px rgba(105, 129, 255, 0.5), 0px 0px 25px 3px rgba(209, 208, 255, 0.5)",
			transition: "all .6s ease",
		},
		[theme.breakpoints.down("xs")]: {
			margin: theme.spacing(3, 0),
		},
	},
	cards: {
		"& div:nth-of-type(2n+1) a": {
			flexDirection: "row",
			"& div:first-child": {
				alignItems: "flex-start",
				textAlign: "left",
			},
			"&  img": {
				clipPath: "polygon(0 0, 100% 0%, 100% 100%, 15% 100%)",
			},
		},
		[theme.breakpoints.up("sm")]: {
			"& div:nth-of-type(2n) a": {
				flexDirection: "row-reverse",
				"& div:first-child": {
					alignItems: "flex-end",
					textAlign: "right",
				},
				"& div:nth-of-type(2n)": {
					justifyContent: "flex-end",
				},
				"&  img": {
					clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0 100%)",
				},
			},
		},
	},
	card: {
		backgroundColor: COLORS.black,
		height: "250px",
		width: "100%",
		[theme.breakpoints.down("xs")]: {
			height: "150px",
		},
	},
	cardContent: {
		padding: theme.spacing(3),
		height: "100%",
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(2),
		},
	},
	cardTitle: {
		fontSize: "30px",
		margin: theme.spacing(1, 0),
		...FONT_STYLES.subheader,
		[theme.breakpoints.down("sm")]: {
			fontSize: "28px",
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.medium,
		},
	},
	cardDate: {
		...FONT_STYLES.text,
		textTransform: "uppercase",
		[theme.breakpoints.down("sm")]: {
			fontSize: FONT_SIZES.small,
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.xSmall,
		},
	},
	cardTime: {
		background: COLORS.blueGradient,
		width: "150px",
		overflow: "hidden",
		[theme.breakpoints.down("sm")]: {
			width: "100px",
		},
	},
	timeText: {
		...FONT_STYLES.text,
		display: "inline-block",
		backgroundColor: "black",
		mixBlendMode: "darken",
		boxShadow: "0px 0px 0px 30px black",
		[theme.breakpoints.down("sm")]: {
			fontSize: FONT_SIZES.xSmall,
		},
	},
	image: {
		margin: theme.spacing(0),
		height: "100%",
		overflow: "hidden",
		"& > img": {
			margin: theme.spacing(0),
			[theme.breakpoints.down("xs")]: {
				height: "250px",
				maxWidth: "unset",
			},
		},
	},
}));

export default function Blog({ blogRef }) {
	const classes = useStyles();
	const MuiTheme = useTheme();
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const isPhone = useMediaQuery(MuiTheme.breakpoints.down("xs"));

	const spacing = isPhone ? 2 : 4;

	const ref = useRef(null);
	useEffect(() => {
		if (ref) {
			blogRef(ref.current.offsetTop);
		}
	}, [ref]);

	const data = useStaticQuery(graphql`
		query blogQuery {
			allMarkdownRemark(
				sort: { fields: frontmatter___date, order: DESC }
				filter: { fileAbsolutePath: { regex: "/.posts/blog./" } }
			) {
				totalCount
				edges {
					node {
						timeToRead
						frontmatter {
							date(formatString: "MMM DD, YYYY")
							title
							photo {
								publicURL
							}
						}
						fields {
							slug
						}
						excerpt
					}
				}
			}
		}
	`);

	return (
		<Grid id="blog" ref={ref} container direction="column" wrap="nowrap" className={classes.root} spacing={4}>
			<Grid container item direction="column" spacing={spacing}>
				<Grid container item direction="column" spacing={4}>
					<Grid item>
						<Divider />
					</Grid>

					<Grid item>
						<Typography variant="h1" color="primary" className={classes.subtitle}>
							Sometimes I write...
						</Typography>
					</Grid>
				</Grid>

				<Grid item>
					<Typography variant="h1" color="primary" className={classes.header}>
						Blog Posts
					</Typography>
				</Grid>
			</Grid>

			<Grid container item justify="space-between" className={classes.cards}>
				{data.allMarkdownRemark.edges.map(({ node }, index) => (
					<Box key={index} className={classes.border}>
						<ButtonBase href={node.fields.slug} className={classes.card}>
							{/* text content */}
							<Grid
								container
								item
								direction="column"
								wrap="nowrap"
								justify="space-evenly"
								xs={isPhone ? 12 : 4}
								className={classes.cardContent}
							>
								<Typography color="primary" className={classes.cardDate}>
									{node.frontmatter.date}
								</Typography>
								<Typography color="primary" className={classes.cardTitle}>
									{node.frontmatter.title}
								</Typography>
								<Typography color="primary" className={classes.cardTime}>
									<Box className={classes.timeText}>
										{node.timeToRead} min read
										<Arrow />
									</Box>
								</Typography>
							</Grid>

							{/* image */}
							{isPhone ? null : (
								<Grid container item alignContent="center" xs={8} className={classes.image}>
									{node.frontmatter.photo !== null ? <img src={node.frontmatter.photo.publicURL} /> : null}
								</Grid>
							)}
						</ButtonBase>
					</Box>
				))}
			</Grid>
		</Grid>
	);
}

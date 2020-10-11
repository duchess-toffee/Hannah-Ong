import React, { useState } from "react";
import { Link as GatsbyLink } from "gatsby";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import ResumeIcon from "@material-ui/icons/InsertDriveFile";
import ResumeIcon from "@material-ui/icons/ListAlt";

import FooterLogo from "../logos/footer-logo";
import FONT_STYLES from "../../styling/font-styles";
import COLORS from "../../styling/colors";

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: "1300px",
		margin: theme.spacing(3),
		[theme.breakpoints.down("xs")]: {
			margin: theme.spacing(0.5),
		},
	},
	links: {
		...FONT_STYLES.text,
		textTransform: "uppercase",
		textDecoration: "none",
		color: COLORS.white,
		display: "flex",
		alignItems: "center",
	},
	icons: {
		[theme.breakpoints.down("xs")]: {
			height: "20px",
		},
	},
}));

export default function Footer() {
	const classes = useStyles();
	const MuiTheme = useTheme();
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const isPhone = useMediaQuery(MuiTheme.breakpoints.down("xs"));
	const isTooSmall = useMediaQuery("(max-width:275px)");

	const displayFooter = isTooSmall ? null : (
		<Grid item xs={6}>
			<FooterLogo />
		</Grid>
	);

	const spacing = isPhone ? 1 : 3;

	const displayIcons = isTablet ? (
		<>
			<Grid item>
				<Link href="https://github.com/duchess-toffee" underline="none" className={classes.links}>
					<GitHubIcon className={classes.icons} />
				</Link>
			</Grid>
			<Grid item>
				<Link href="https://www.linkedin.com/in/hannah-ong/" underline="none" className={classes.links}>
					<LinkedInIcon className={classes.icons} />
				</Link>
			</Grid>
			<Grid item>
				<Link href="https://twitter.com/duchess_toffee" underline="none" className={classes.links}>
					<TwitterIcon className={classes.icons} />
				</Link>
			</Grid>
			<Grid item>
				<GatsbyLink to="/resume" className={classes.links}>
					<ResumeIcon className={classes.icons} />
				</GatsbyLink>
			</Grid>
		</>
	) : (
		<>
			<Grid item>
				<Link href="https://github.com/duchess-toffee" underline="none" className={classes.links}>
					GitHub
				</Link>
			</Grid>
			<Grid item>
				<Link href="https://www.linkedin.com/in/hannah-ong/" underline="none" className={classes.links}>
					LinkedIn
				</Link>
			</Grid>
			<Grid item>
				<Link href="https://twitter.com/duchess_toffee" underline="none" className={classes.links}>
					Twitter
				</Link>
			</Grid>
			<Grid item>
				<GatsbyLink to="/resume" className={classes.links}>
					Resume
				</GatsbyLink>
			</Grid>
		</>
	);

	return (
		<Grid container item wrap="nowrap" justify="center">
			<Grid container item wrap="nowrap" className={classes.root}>
				{displayFooter}

				<Grid container item justify="flex-end" alignItems="center" spacing={spacing}>
					{displayIcons}
				</Grid>
			</Grid>
		</Grid>
	);
}

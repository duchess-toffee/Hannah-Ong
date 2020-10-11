import React, { useEffect, useRef } from "react";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainButton from "../components/buttons/main-button";
import LargeSkillsIcons from "../images/icons/large-skills-icons.svg";
import SmallSkillsIcons from "../images/icons/small-skills-icons.svg";

import Divider from "../components/dividers/main-divider";

import FONT_STYLES, { FONT_WEIGHT, FONT_SIZES } from "../styling/font-styles";
import COLORS from "../styling/colors";

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: "1000px",
		margin: theme.spacing(5, 0),
	},
	divider: {
		width: "60px",
		border: "1px solid black",
	},
	subtitle: {
		...FONT_STYLES.subtitle,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.xSmall,
		},
	},
	mainText: {
		margin: theme.spacing(0, 0, 0, 5),
		[theme.breakpoints.down("xs")]: {
			margin: theme.spacing(0),
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
		margin: theme.spacing(3, 0),
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.small,
		},
	},
	bold: {
		fontWeight: FONT_WEIGHT.regular,
	},
	icons: {
		position: "relative",
		"& > svg": {
			position: "absolute",
			height: "90%",
			width: "auto",
			right: "50px",
			[theme.breakpoints.down("sm")]: {
				position: "relative",
				height: "500px",
				right: "0",
			},
			[theme.breakpoints.down("xs")]: {
				top: "-80px",
				height: "auto",
			},
		},
	},
}));

export default function About({ aboutRef }) {
	const classes = useStyles();
	const MuiTheme = useTheme();
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const isPhone = useMediaQuery(MuiTheme.breakpoints.down("xs"));

	const direction = isTablet ? "column-reverse" : "row";
	const size = isTablet ? 12 : 6;
	const spacing = isPhone ? 2 : 4;

	const displayIcons = isTablet ? <SmallSkillsIcons /> : <LargeSkillsIcons />;

	const ref = useRef(null);
	useEffect(() => {
		if (ref) {
			aboutRef(ref.current.offsetTop);
		}
	}, [ref]);

	return (
		<Grid
			id="about"
			ref={ref}
			container
			direction={direction}
			wrap="nowrap"
			justify="center"
			spacing={4}
			className={classes.root}
		>
			{/* Icons */}
			<Grid container item alignItems="center" xs={size} className={classes.icons} style={{ padding: 0 }}>
				{displayIcons}
			</Grid>

			{/* Text */}
			<Grid container item direction="column" justify="center" spacing={spacing} xs={size}>
				{/* Divider, Subtitle */}
				<Grid container item direction="column" spacing={4}>
					<Grid item>
						<Divider />
					</Grid>

					<Grid item>
						<Typography variant="h1" noWrap color="primary" className={classes.subtitle}>
							About me
						</Typography>
					</Grid>
				</Grid>

				{/* Title, About, Button */}
				<Grid container item direction="column" alignItems="flex-start" spacing={spacing} className={classes.mainText}>
					<Grid item>
						<Typography variant="h1" noWrap color="primary" className={classes.header}>
							I'm a <br /> Web Developer
						</Typography>
					</Grid>

					<Grid item>
						<Typography variant="h2" color="primary" className={classes.text}>
							Hello, I’m Hannah Ong. <br />
							<br />
							I’m a Frontend Developer based in Colorado. I’m passionate about developing great web experiences. <br />
							<br />
							<span className={classes.bold}>Achievement(s):</span>
							<br />
							Dev.to GitHub Actions Hackathon GrandPrize Winner
						</Typography>
					</Grid>

					<Grid item>
						<MainButton href="/posts/blog/why-i-changed-careers/" type="button">
							More About Me
						</MainButton>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

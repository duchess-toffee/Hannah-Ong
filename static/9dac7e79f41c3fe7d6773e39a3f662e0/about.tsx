import React, { useEffect, useRef } from "react";

import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MainButton from "../components/buttons/main-button";
import LargeSkillsIcons from "../images/icons/large-skills-icons.svg";
import SmallSkillsIcons from "../images/icons/small-skills-icons.svg";

import Divider from "../components/dividers/main-divider";

import FONT_STYLES, { FONT_WEIGHT, FONT_SIZES } from "../styling/font-styles";

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: "1000px",
		padding: theme.spacing(5, 0),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(10, 2),
		},
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(5, 2),
		},
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
		padding: theme.spacing(0, 0, 0, 5),
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(0),
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
				height: "auto",
				width: "100vw",
				left: "0px",
				padding: 0,
			},
			[theme.breakpoints.down("xs")]: {
				position: "relative",
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
	const justify = isTablet ? "flex-end" : "center";
	const size = isTablet ? 12 : 6;
	const spacing = isPhone ? 2 : 4;

	const displayIcons = isPhone ? <LargeSkillsIcons /> : isTablet ? <SmallSkillsIcons /> : <LargeSkillsIcons />;

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
			justify={justify}
			spacing={4}
			className={classes.root}
		>
			{/* Icons */}
			<Grid container item justify="center" alignItems="center" xs={size} className={classes.icons}>
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
				<Grid
					container
					item
					direction="column"
					alignItems="flex-start"
					spacing={spacing}
					className={classes.mainText}
					style={{ padding: isPhone ? "0px" : "0px 40px" }}
				>
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
						<MainButton href="/posts/blog/why-i-changed-careers/" ariaLabel={`Go to About Me`} type="button">
							More About Me
						</MainButton>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

import React, { useCallback, useEffect, useState } from "react";

import clsx from "clsx";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import MainImg from "../images/profile/main-image6.jpg";

import Divider from "../components/dividers/main-divider";

import FONT_STYLES, { FONT_SIZES } from "../styling/font-styles";
import COLORS from "../styling/colors";

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: "900px",
		margin: theme.spacing(5, 2),
		[theme.breakpoints.down("xs")]: {
			minHeight: "700px",
		},
	},
	subtitle: {
		...FONT_STYLES.subtitle,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.xSmall,
		},
	},
	mainText: {
		margin: theme.spacing(0, 0, 0, 5),
	},
	header: {
		...FONT_STYLES.title,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.large,
		},
	},
	subheader: {
		...FONT_STYLES.subheader,
		textTransform: "lowercase",
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.small,
		},
	},
	rightContainer: {
		[theme.breakpoints.down("sm")]: {
			minHeight: "700px",
		},
		[theme.breakpoints.down("xs")]: {
			minHeight: "325px",
		},
	},
	imageContainer: {
		position: "relative",
	},
	rightBox: {
		position: "absolute",
		backgroundColor: "#282828",
		height: "410px",
		width: "260px",
		top: "350px",
		right: "-75px",
		filter: "drop-shadow(0px 5px 50px rgba(158, 158, 158, 0.25))",
		[theme.breakpoints.down("sm")]: {
			top: "225px",
			right: "75px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "205px",
			width: "130px",
			top: "100px",
			right: "70px",
		},
	},
	topBox: {
		position: "absolute",
		backgroundColor: "#5A5A5A",
		height: "240px",
		width: "425px",
		top: "150px",
		right: "-100px",
		filter: "drop-shadow(0px 5px 50px rgba(158, 158, 158, 0.25))",
		[theme.breakpoints.down("sm")]: {
			top: "25px",
			right: "50px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "120px",
			width: "212.5px",
			top: "0px",
			right: "50px",
		},
	},
	bottomBox: {
		position: "absolute",
		backgroundColor: "#929292",
		height: "175px",
		width: "300px",
		top: "525px",
		right: "100px",
		filter: "drop-shadow(0px 5px 50px rgba(158, 158, 158, 0.25))",
		[theme.breakpoints.down("sm")]: {
			top: "400px",
			right: "225px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "87.5px",
			width: "150px",
			top: "185px",
			right: "150px",
		},
	},
	image: {
		position: "absolute",
		backgroundColor: "lightgray",
		objectPosition: "left",
		objectFit: "cover",
		height: "480px",
		width: "380px",
		top: "200px",
		right: "0",
		[theme.breakpoints.down("sm")]: {
			top: "75px",
			right: "125px",
		},
		[theme.breakpoints.down("xs")]: {
			height: "240px",
			width: "190px",
			top: "25px",
			right: "100px",
		},
	},
	icons: {
		padding: theme.spacing(0, 0, 0, 25),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(0),
		},
	},
	iconList: {
		background: COLORS.blueGradient,
		padding: theme.spacing(0),
	},
	icon: {
		backgroundColor: "black",
		mixBlendMode: "darken",
		boxShadow: "0px 0px 0px 20px black",
		[theme.breakpoints.down("xs")]: {
			height: "20px",
		},
	},
	descriptor: {
		position: "relative",
		cursor: "pointer",
		opacity: 0,
		transition: "opacity .6s ease",
		background:
			"black -webkit-gradient(linear, left top, right top, from(black), to(black), color-stop(0.5, blue)) 0 0 no-repeat",
		backgroundImage:
			"linear-gradient(-40deg, transparent 0%, transparent 40%, #fff 50%, transparent 60%, transparent 100%)",
		backgroundSize: "200px",
		color: "rgba(255, 255, 255, 0.3)",
		WebkitBackgroundClip: "text",
		animation: `$shine 5000ms ${theme.transitions.easing.easeInOut}`,
		animationIterationCount: "infinite",
		"&:hover": {
			color: "rgba(255, 255, 255, 1)",
			transition: "all .6s ease",
		},
	},
	animation: {
		opacity: 1,
	},
	"@keyframes shine": {
		"0%": {
			backgroundPosition: "-1000px",
		},
		"100%": {
			backgroundPosition: "1000px",
		},
	},
}));

export default function Hero() {
	const classes = useStyles();
	const MuiTheme = useTheme();
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const isMobile = useMediaQuery(MuiTheme.breakpoints.down("xs"));
	const isTooSmall = useMediaQuery("(max-width:325px)");
	const [descriptorIndex, setDescriptorIndex] = useState(0);
	const [visible, setVisible] = useState(true);
	const descriptors = ["dog owner", "boulderer", "amateur gardener", "occassional designer"];

	const mainDirection = isTablet ? "column" : "row";
	const rightDirection = isTablet ? "row-reverse" : "row";
	const spacing = isMobile ? 2 : 4;
	const titleSpacing = isMobile ? 4 : 6;
	const hideIcons = isTooSmall ? null : (
		<List className={classes.iconList}>
			<ListItem style={{ margin: 0, padding: 0 }}>
				<IconButton href="https://github.com/duchess-toffee">
					<GitHubIcon color="primary" className={classes.icon} />
				</IconButton>
			</ListItem>

			<ListItem style={{ margin: 0, padding: 0 }}>
				<IconButton href="https://www.linkedin.com/in/hannah-ong/">
					<LinkedInIcon color="primary" className={classes.icon} />
				</IconButton>
			</ListItem>

			<ListItem style={{ margin: 0, padding: 0 }}>
				<IconButton href="https://twitter.com/duchess_toffee">
					<TwitterIcon color="primary" className={classes.icon} />
				</IconButton>
			</ListItem>

			<ListItem style={{ margin: 0, padding: 0 }}>
				<IconButton href="#contact">
					<MailOutlineIcon color="primary" className={classes.icon} />
				</IconButton>
			</ListItem>
		</List>
	);

	const handleDescriptorChange = useCallback(() => {
		setVisible(false);
		setTimeout(() => {
			setDescriptorIndex((descriptorIndex + 1) % descriptors.length);
			setVisible(true);
		}, 600);
	}, [descriptorIndex, visible]);

	// useEffect(() => {
	//   setTimeout(() => {
	//     setDescriptorIndex((descriptorIndex + 1) % descriptors.length)
	//     setVisible(true)
	//   }, 3000)
	// }, [descriptorIndex, visible])

	return (
		<Grid container direction={mainDirection} wrap="nowrap" spacing={6} className={classes.root}>
			{/* Left Section (Divider, Subtitle, Header, SubHeader) */}
			<Grid container item direction="column" justify="center" spacing={titleSpacing} xs={6}>
				<Grid container item direction="column" spacing={4}>
					<Grid item>
						<Divider />
					</Grid>

					<Grid item>
						<Typography variant="h1" noWrap color="primary" className={classes.subtitle}>
							Hello and Welcome!
						</Typography>
					</Grid>
				</Grid>

				<Grid container item direction="column" spacing={spacing} className={classes.mainText}>
					<Grid item>
						<Typography variant="h1" noWrap color="primary" className={classes.header}>
							Hannah Ong,
						</Typography>
					</Grid>

					<Grid item>
						<Typography variant="h2" noWrap color="primary" className={classes.subheader}>
							Web Developer & <br />
							<span
								onClick={handleDescriptorChange}
								className={clsx(classes.descriptor, {
									[classes.animation]: visible,
								})}
							>
								{descriptors[descriptorIndex]}
							</span>
						</Typography>
					</Grid>
				</Grid>
			</Grid>

			{/* Right Section (Image & Icons) */}
			<Grid container item direction={rightDirection} wrap="nowrap" className={classes.rightContainer}>
				{/* Middle Section (Image) */}
				<Grid container item alignItems="center" className={classes.imageContainer} xs={11}>
					<Box className={classes.rightBox}></Box>
					<Box className={classes.topBox}></Box>
					<Box className={classes.bottomBox}></Box>
					<img src={MainImg} alt="Hannah and Toffee" className={classes.image} />
				</Grid>

				{/*  Icons*/}
				<Grid container item alignItems="flex-end" justify="flex-end" className={classes.icons} xs={1}>
					{hideIcons}
				</Grid>
			</Grid>
		</Grid>
	);
}

import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import FONT_STYLES from "../../styling/font-styles";
import COLORS from "../../styling/colors";
import LightDarkToggle from "../buttons/light-dark-toggle";
import Arrow from "../../images/icons/back-arrow.svg";
import PrintIcon from "@material-ui/icons/Print";

const useStyles = makeStyles(theme => ({
	root: {
		background: "transparent",
		boxShadow: "none",
	},
	link: {
		textDecoration: "none",
		"& > *": {
			...FONT_STYLES.miniText,
		},
	},
	button: {
		...FONT_STYLES.miniText,
		margin: theme.spacing(0, 1),
	},
}));

export default function NavBar({ onTheme }) {
	const classes = useStyles();
	const [mainNav, setMainNav] = useState(true);
	const [resumeNav, setResumeNav] = useState(false);

	useEffect(() => {
		if (window.location.pathname === "/resume" || window.location.pathname === "/resume/") {
			setResumeNav(true);
			setMainNav(false);
		} else if (window.location.pathname !== "/") {
			setMainNav(false);
		}
	}, []);

	const displayHomeBtn = mainNav ? null : (
		<Button href="/" disableRipple style={{ background: "transparent" }}>
			<Arrow /> <Typography className={classes.button}>Home</Typography>
		</Button>
	);

	const displayLinks = mainNav ? (
		<>
			<Grid item>
				<Link to="/#work" className={classes.link}>
					<Typography variant="subtitle1" color="primary">
						PROJECTS
					</Typography>
				</Link>
			</Grid>
			<Grid item>
				<Typography variant="subtitle1" color="primary">
					/
				</Typography>
			</Grid>
			<Grid item>
				<Link to="/#blog" className={classes.link}>
					<Typography variant="subtitle1" color="primary">
						BLOG
					</Typography>
				</Link>
			</Grid>
		</>
	) : null;

	const displayPrint = resumeNav ? (
		<>
			<Grid item>
				<Button
					href="https://drive.google.com/file/d/1jfE9aeES0-dgbBYmQs0iviBPgyHMxqsO/view?usp=sharing"
					disableRipple
					style={{ background: "transparent" }}
				>
					<Typography className={classes.button}>Print</Typography>
					<PrintIcon fontSize="small" />
				</Button>
			</Grid>
		</>
	) : null;

	return (
		<>
			<AppBar position="absolute" className={classes.root}>
				<Toolbar
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Grid
						container
						wrap="nowrap"
						style={{
							maxWidth: "1100px",
						}}
					>
						<Grid item xs={4}>
							{displayHomeBtn}
						</Grid>

						{/* Internal Page Links */}
						<Grid container item wrap="nowrap" justify="flex-end" alignItems="center" spacing={2} xs={8}>
							{displayLinks}
							{displayPrint}
							{/*<Grid item> <LightDarkToggle onTheme={onTheme} /> </Grid>*/}
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
}

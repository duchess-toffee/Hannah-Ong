import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import COLORS from "../../styling/colors";
import ArrowImg from "../../images/icons/work-button-arrow.svg";
import FONT_STYLES from "../../styling/font-styles";

const useStyles = makeStyles(theme => ({
	root: {
		margin: theme.spacing(2, 0),
		"&:hover ": {
			boxShadow: "0px 5px 25px 3px rgba(105, 129, 255, 0.5), 0px 0px 25px 3px rgba(209, 208, 255, 0.5)",
			transition: "all .6s ease",
		},
	},
	button: {
		padding: theme.spacing(1, 2, 1, 2),
		border: "2px solid",
		borderImage: COLORS.blueGradient,
		borderImageSlice: 1,
		borderRadius: "0px",
		"& > *": {
			...FONT_STYLES.buttonText,
			color: COLORS.white,
		},
		"&:hover": {
			backgroundColor: COLORS.blueGradient,
		},
	},
	arrow: {
		margin: theme.spacing(0, 0, 0, 1),
	},
}));

export default function MainButton({ href, children }) {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Button href={href} color="primary" className={classes.button}>
				{children}
				<ArrowImg className={classes.arrow} />
			</Button>
		</Box>
	);
}

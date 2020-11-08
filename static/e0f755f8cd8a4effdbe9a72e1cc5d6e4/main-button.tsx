import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import COLORS from "../../styling/colors";
import ArrowImg from "../../images/icons/button-arrow.svg";
import FONT_STYLES, { FONT_SIZES } from "../../styling/font-styles";

const useStyles = makeStyles(theme => ({
	root: {
		// backgroundImage: COLORS.blueGradient,
		// padding: theme.spacing(0.25),
		// "&:hover": {
		//   animation: "$slidebg 2s linear 1",
		// },
	},
	button: {
		padding: theme.spacing(2, 4),
		// background: COLORS.black,
		border: "2px solid",
		borderImage: COLORS.blueGradient,
		borderImageSlice: 1,
		borderRadius: "0px",
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(1.5, 3),
		},
		"& > *": {
			...FONT_STYLES.buttonText,
			color: COLORS.white,
			[theme.breakpoints.down("xs")]: {
				fontSize: FONT_SIZES.xSmall,
			},
		},
		"&:hover ": {
			boxShadow: "0px 5px 25px 3px rgba(105, 129, 255, 0.5), 0px 0px 25px 3px rgba(209, 208, 255, 0.5)",
			transition: "all .6s ease",
		},
	},
	arrow: {
		margin: theme.spacing(0, 0, 0, 2),
	},
}));

export default function MainButton({ href, type, ariaLabel, children }) {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Button href={href} type={type || "button"} color="primary" aria-label={ariaLabel} className={classes.button}>
				{children}
				<ArrowImg alt="arrow button" className={classes.arrow} />
			</Button>
		</Box>
	);
}

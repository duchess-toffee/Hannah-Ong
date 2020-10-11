import React, { useEffect, useRef, useState } from "react";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	},
	element: {
		animation: `$slidein 20s linear`,
		animationIterationCount: "infinite",
	},
	"@keyframes slidein": {
		"0%": {
			transform: "translateX(-200%)",
		},
		"100%": {
			transform: "translateX(-100%)",
		},
	},
	relement: {
		animation: `$rslidein 20s linear`,
		animationIterationCount: "infinite",
	},
	"@keyframes rslidein": {
		"0%": {
			transform: "translateX(-100%)",
		},
		"100%": {
			transform: "translateX(-200%)",
		},
	},
}));

function cloneElements(children, baseClass, className) {
	return [1, 2, 3, 4, 5].map(index => (
		<div key={index} className={`${baseClass} ${className}`}>
			{children}
		</div>
	));
}

export default function (props) {
	const classes = useStyles();
	const MuiTheme = useTheme();
	const isPhone = useMediaQuery(MuiTheme.breakpoints.down("xs"));

	// useEffect(() => {
	// 	if (elementRef) {
	// 		setElementWidth(elementRef.current.offsetWidth);
	// 	}
	// }, [elementRef, setElementWidth]);

	return (
		<>
			<div className={classes.root}>{cloneElements(props.children, props.className, classes.element)}</div>
			<div className={classes.root}>{cloneElements(props.children, props.className, classes.relement)}</div>
			{isPhone ? (
				<div className={classes.root}>{cloneElements(props.children, props.className, classes.element)}</div>
			) : null}
		</>
	);
}

import React, { useEffect, useRef, useState } from "react";

import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
	},
	element: {
		WebkitAnimation: `$slidein 20s linear`,
		WebkitAnimationIterationCount: "infinite",
		animation: `$slidein 20s linear`,
		animationIterationCount: "infinite",
		WebkitTransform: "translate3d(0, 0, 0)",
		WebkitPerspective: "1000px",
		perspective: "1000px",
	},
	"@keyframes slidein": {
		// "0%": {
		// 	WebkitTransform: "translate3d(0, 0, 0)",
		// 	msTransform: "translate3d(0 0, 0)",
		// 	transform: "translate3d(0, 0, 0)",
		// },
		"0%": {
			WebkitTransform: "translate3d(-200%, 0, 0)",
			msTransform: "translate3d(-200%, 0, 0)",
			transform: "translate3d(-200%, 0, 0)",
		},
		"100%": {
			WebkitTransform: "translate3d(-100%, 0, 0)",
			msTransform: "translate3d(-100%, 0, 0)",
			transform: "translate3d(-100%, 0, 0)",
		},
	},
	relement: {
		WebkitAnimation: `$rslidein 20s linear`,
		WebkitAnimationIterationCount: "infinite",
		animation: `$rslidein 20s linear`,
		animationIterationCount: "infinite",
		WebkitTransform: "translate3d(0, 0, 0)",
	},
	"@keyframes rslidein": {
		// "0%": {
		// 	WebkitTransform: "translate3d(0, 0, 0)",
		// 	msTransform: "translate3d(0 0, 0)",
		// 	transform: "translate3d(0, 0, 0)",
		// },
		"0%": {
			WebkitTransform: "translate3d(-100%, 0, 0)",
			msTransform: "translate3d(-100%, 0, 0)",
			transform: "translate3d(-100%, 0, 0)",
		},
		"100%": {
			WebkitTransform: "translate3d(-200%, 0, 0)",
			msTransform: "translate3d(-200%, 0, 0)",
			transform: "translate3d(-200%, 0, 0)",
		},
	},
}));

function cloneElements(children, baseClass, className) {
	return [1, 2, 3, 4].map(index => (
		<div key={index} className={`${baseClass} ${className}`}>
			{children}
		</div>
	));
}
function phoneElements(children, baseClass, className) {
	return [1, 2, 3].map(index => (
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
			{isPhone ? null : (
				<>
					<div className={classes.root}>{cloneElements(props.children, props.className, classes.element)}</div>
					<div className={classes.root}>{cloneElements(props.children, props.className, classes.relement)}</div>
				</>
			)}
			{isPhone ? (
				<>
					<div className={classes.root}>{phoneElements(props.children, props.className, classes.element)}</div>
					<div className={classes.root}>{phoneElements(props.children, props.className, classes.relement)}</div>
					<div className={classes.root}>{phoneElements(props.children, props.className, classes.element)}</div>
				</>
			) : null}
		</>
	);
}

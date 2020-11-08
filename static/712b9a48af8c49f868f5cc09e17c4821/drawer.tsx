import React from "react";
import { Transition } from "react-transition-group";

import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing("3px", "3px", "3px", "3px"),
	},
}));

const defaultStyle = {
	transition: `opacity 10000ms ease-in-out`,
	opacity: 0,
};

const transitionStyles = {
	entering: { opacity: 0 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};

export default function Drawer({ open, children }) {
	const classes = useStyles();

	return (
		<Transition in={open} timeout={300}>
			{state => (
				<Slide
					direction="down"
					in={open}
					mountOnEnter
					unmountOnExit
					//   enter={false}
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
					className={classes.root}
				>
					<div>{children}</div>
				</Slide>
			)}
		</Transition>
	);
}

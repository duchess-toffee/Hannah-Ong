import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "./navBar";
import SideNavBar from "./sideNavBar";
import Footer from "./footer";

const useStyles = makeStyles(theme => ({
	root: {
		overflow: "hidden",
	},
	container: {
		maxWidth: "1100px",
		padding: theme.spacing(5, 0, 0, 0),
	},
}));

export default function Layout({ onTheme, index, children }) {
	const classes = useStyles();

	return (
		<>
			<Box className={classes.root}>
				<Container disableGutters className={classes.container}>
					<NavBar onTheme={onTheme} />
					<SideNavBar index={index} />
					{children}
				</Container>
				<Footer />
			</Box>
		</>
	);
}

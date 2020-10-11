import React, { useState, useEffect, useCallback } from "react";

import { Link } from "gatsby";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import COLORS from "../../styling/colors";

const useStyles = makeStyles(theme => ({
	root: {
		background: "transparent",
		boxShadow: "none",
		margin: theme.spacing(15, 0, 0, 0),
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
	barList: {
		// height: "85px",
		// width: "30px",
		// background: COLORS.blueGradient,
	},
	bar: {
		height: "2px",
		width: "15px",
		padding: theme.spacing(0.25, 0, 0, 0),
		margin: theme.spacing(1, 0, 1, 0),
		borderRadius: "0px",
		minWidth: 0,
		background: COLORS.blueGradient,
		// "&:after": {
		//   content: "''",
		//   height: "0",
		//   width: "10000px",
		//   backgroundColor: "white",
		//   mixBlendMode: "lighten",
		// },
	},
	activeBar: {
		width: "30px",
	},
	hide: {
		display: "none",
	},
}));

export default function SideNavBar({ index }) {
	const classes = useStyles();
	const [sectionIndex, setSectionIndex] = useState(index);

	useEffect(() => {
		if (index === 4) {
			setSectionIndex(4);
		} else if (index === 3) {
			setSectionIndex(3);
		} else if (index === 2) {
			setSectionIndex(2);
		} else if (index === 1) {
			setSectionIndex(1);
		} else {
			setSectionIndex(0);
		}
	}, [index, sectionIndex]);

	return (
		<>
			<AppBar
				className={clsx(classes.root, {
					[classes.hide]: sectionIndex === 0,
				})}
			>
				<Toolbar>
					<Grid container item direction="column" wrap="nowrap" alignItems="flex-end">
						<Grid container item direction="column" wrap="nowrap" alignItems="flex-end" className={classes.barList}>
							<Button
								href="#"
								color="primary"
								className={clsx(classes.bar, {
									[classes.activeBar]: sectionIndex === 0,
								})}
							></Button>

							<Button
								href="#about"
								color="primary"
								className={clsx(classes.bar, {
									[classes.activeBar]: sectionIndex === 1,
								})}
							></Button>

							<Button
								href="#work"
								color="primary"
								className={clsx(classes.bar, {
									[classes.activeBar]: sectionIndex === 2,
								})}
							></Button>

							<Button
								href="#blog"
								color="primary"
								className={clsx(classes.bar, {
									[classes.activeBar]: sectionIndex === 3,
								})}
							></Button>

							<Button
								href="#contact"
								color="primary"
								className={clsx(classes.bar, {
									[classes.activeBar]: sectionIndex === 4,
								})}
							></Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
}

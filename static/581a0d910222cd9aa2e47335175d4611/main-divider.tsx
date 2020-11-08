import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
	root: {
		width: "60px",
	},
}));

export default function CustomDivider() {
	const classes = useStyles();

	return <Divider color="primary" className={classes.root}></Divider>;
}

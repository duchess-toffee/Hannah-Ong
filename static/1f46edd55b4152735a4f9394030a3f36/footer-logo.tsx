import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import FONT_STYLES, { FONT_SIZES } from "../../styling/font-styles";

const useStyles = makeStyles(theme => ({
	logo: {
		...FONT_STYLES.subheader,
		textTransform: "none",
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.medium,
		},
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<Button href="#" disableRipple variant="text" style={{ backgroundColor: "transparent" }}>
			<Typography noWrap className={classes.logo}>
				Hannah Ong
			</Typography>
		</Button>
	);
}

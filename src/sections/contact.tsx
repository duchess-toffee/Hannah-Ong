import React, { useState, useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MainButton from "../components/buttons/main-button";
import TextField from "@material-ui/core/TextField";

import Drawer from "../components/drawer/drawer";
import Divider from "../components/dividers/main-divider";

import FONT_STYLES, { FONT_SIZES } from "../styling/font-styles";
import COLORS from "../styling/colors";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: "900px",
	},
	header: {
		...FONT_STYLES.title,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.large,
		},
	},
	text: {
		...FONT_STYLES.text,
		[theme.breakpoints.down("xs")]: {
			fontSize: FONT_SIZES.small,
		},
	},
	textInputs: {
		margin: theme.spacing(0, 0, 3, 0),
	},
	textField: {
		width: "360px",
		margin: theme.spacing(1.5, 0),
		"& > .MuiOutlinedInput-root": {
			borderRadius: "0px",
			border: "1px solid white",
			"& > .MuiInputBase-input:-webkit-autofill": {
				borderRadius: "0px",
				WebkitBorderRadius: "0px",
				// boxShadow: "none",
				// WebkitBoxShadow: "none",
			},
		},
		[theme.breakpoints.down("xs")]: {
			width: "125%",
		},
	},
}));

export default function Contact({ contactRef }) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const ref = useRef(null);
	useEffect(() => {
		if (ref) {
			contactRef(ref.current.offsetTop);
		}
	}, [ref]);

	return (
		<Grid
			id="contact"
			ref={ref}
			container
			item
			direction="column"
			justify="center"
			alignItems="center"
			spacing={10}
			className={classes.root}
		>
			<Grid container item direction="column" justify="center" alignItems="center" spacing={4}>
				<Grid item>
					<Typography variant="h1" color="primary" align="center" className={classes.header}>
						Get in touch
					</Typography>
				</Grid>

				<Grid item>
					<Typography variant="h1" color="primary" align="center" className={classes.text}>
						Have an exciting idea? Let's chat.
					</Typography>
				</Grid>

				<Grid item>
					<Divider />
				</Grid>
			</Grid>

			<form
				name="contact-form"
				action="https://k3qh929kkk.execute-api.us-east-1.amazonaws.com/production/contact"
				method="POST"
			>
				<Grid container direction="column" alignItems="center" item>
					<Drawer open={open}>
						<Grid
							container
							item
							direction="column"
							alignItems="center"
							alignContent="center"
							className={classes.textInputs}
						>
							<TextField name="name" placeholder="Name" variant="outlined" required className={classes.textField} />
							<TextField
								name="email"
								placeholder="Email"
								type="email"
								variant="outlined"
								required
								className={classes.textField}
							/>
							<TextField
								name="message"
								placeholder="Message"
								variant="outlined"
								multiline
								rows={3}
								required
								className={classes.textField}
							/>
						</Grid>
					</Drawer>
					<Grid item>
						{open ? (
							<MainButton type="submit" ariaLabel={"Submit Contact Form"}>
								Submit
							</MainButton>
						) : null}
					</Grid>
				</Grid>
			</form>
			<Grid item onClick={() => setOpen(true)} style={{ padding: 0 }}>
				{open ? null : (
					<MainButton type="button" ariaLabel={"Contact Me"}>
						Contact Me
					</MainButton>
				)}
			</Grid>
		</Grid>
	);
}

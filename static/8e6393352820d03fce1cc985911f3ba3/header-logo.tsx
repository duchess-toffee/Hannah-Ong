import React from "react"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import FONT_STYLES from "../../styling/font-styles"

const useStyles = makeStyles(theme => ({
  logo: {
    ...FONT_STYLES.subheader,
    textTransform: "none",
  },
}))

export default function Footer() {
  const classes = useStyles()

  return <Typography className={classes.logo}>Hannah Ong</Typography>
}

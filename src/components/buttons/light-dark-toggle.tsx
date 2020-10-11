import React, { useState, useEffect } from "react"

import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"

import COLORS from "../../styling/colors"

const useStyles = makeStyles(theme => ({
  root: {
    width: "24px",
    height: "14px",
    border: `1px solid ${COLORS.black}`,
    borderRadius: "24px",
    cursor: "pointer",
  },
  button: {
    width: "10px",
    height: "10px",
    backgroundColor: COLORS.black,
    border: `1px solid ${COLORS.white}`,
    borderRadius: "100%",
    margin: theme.spacing(0, 0, 0, "1px"),
  },
  darkRoot: {
    border: `1px solid ${COLORS.white}`,
    backgroundColor: COLORS.black,
  },
  darkButton: {
    backgroundColor: COLORS.white,
    border: `1px solid ${COLORS.black}`,
    transform: "translateX(10px)",
  },
}))

export default function LightDarkToggle({ onTheme }) {
  const classes = useStyles()
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      onTheme(darkMode)
    }
  }, [darkMode])

  return (
    <Grid
      container
      alignItems="center"
      className={clsx(classes.root, {
        [classes.darkRoot]: darkMode,
      })}
      onClick={() => setDarkMode(!darkMode)}
    >
      <Grid
        item
        className={clsx(classes.button, {
          [classes.darkButton]: darkMode,
        })}
      ></Grid>
    </Grid>
  )
}

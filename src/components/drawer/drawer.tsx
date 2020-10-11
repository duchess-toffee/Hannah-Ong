import React, { useState } from "react"
import { Transition } from "react-transition-group"

import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Divider from "@material-ui/core/Divider"
import Slide from "@material-ui/core/Slide"

import COLORS from "../../styling/colors"
import FONT_STYLES from "../../styling/font-styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing("3px", "3px", "3px", "3px"),
  },
}))

const defaultStyle = {
  transition: `opacity 10000ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

export default function Drawer({ open, children }) {
  const classes = useStyles()

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
  )
}

import React from "react"
import { createMuiTheme } from "@material-ui/core/styles"
import COLORS from "../colors"

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: COLORS.white,
    },
    text: {
      primary: COLORS.black,
      secondary: COLORS.black,
    },
    primary: {
      main: COLORS.black,
    },
    divider: COLORS.black,
  },
})

export default lightTheme

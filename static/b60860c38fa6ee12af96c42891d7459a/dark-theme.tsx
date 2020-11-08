import { createMuiTheme } from "@material-ui/core/styles";
import COLORS from "../colors";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		background: {
			default: COLORS.black,
		},
		text: {
			primary: COLORS.white,
			secondary: COLORS.white,
		},
		primary: {
			main: COLORS.white,
		},
		divider: COLORS.white,
	},
});

export default darkTheme;

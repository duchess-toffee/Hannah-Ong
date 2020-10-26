const COLORS = {
	white: "#FFFFFF",
	melon: "#FFB5A7",
	palePink: "#FCD5CE",
	mistyRose: "#FAE1DD",
	isabelline: "#F8EDEB",
	champagnePink: "#F9E5D8",
	peachPuff: "#F9DCC4",
	peachCrayola: "#FEC89A",
	blueGradient: "linear-gradient(135deg, #D1D0FF 13.02%, #6981FF 67.71%)",
	buttonGradient: "linear-gradient(90deg, #D1D0FF 0%, #6981FF 50%, #D1D0FF 100%)",
	black: "#000000",
};

export default COLORS;

import { createMuiTheme } from "@material-ui/core/styles";

const lightTheme = createMuiTheme({
	palette: {
		type: "light",
	},
});

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

export { lightTheme, darkTheme };

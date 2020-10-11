import colors from "./colors";
import "./fonts.css";

const FONT_FAMILY = {
	title: "'Playfair Display', serif",
	text: "'Chivo', sans-serif",
};

const FONT_SIZES = {
	xlarge: "64px",
	large: "36px",
	medium: "20px",
	small: "18px",
	xSmall: "14px",
};

const FONT_WEIGHT = {
	black: 900,
	extraBold: 800,
	bold: 700,
	semiBold: 600,
	medium: 500,
	regular: 400,
	light: 300,
	extraLight: 200,
	thin: 100,
};

const LINE_HEIGHT = {
	tall: "200%",
	medium: "150%",
	short: "120%",
};

const LINE_SPACING = {
	large: "200%",
	medium: "160%",
	small: "0.07em",
};

interface FontStyle {
	fontSize: string;
	fontFamily?: string;
	color?: string;
	fontWeight: number;
	lineHeight?: string;
	letterSpacing?: string;
	textDecoration?: string;
	textTransform?: string;
	textShadow?: string;
}

const FONT_STYLES: { [styleProperty: string]: FontStyle } = {
	title: {
		fontSize: FONT_SIZES.xlarge,
		fontFamily: FONT_FAMILY.title,
		fontWeight: FONT_WEIGHT.black,
		lineHeight: LINE_HEIGHT.medium,
		textDecoration: "none",
		textShadow: "0px 10px 25px rgba(255, 255, 255, 0.25)",
	},
	subheader: {
		fontSize: FONT_SIZES.large,
		fontFamily: FONT_FAMILY.title,
		fontWeight: FONT_WEIGHT.black,
		lineHeight: LINE_HEIGHT.short,
	},
	subtitle: {
		fontSize: FONT_SIZES.medium,
		fontFamily: FONT_FAMILY.text,
		fontWeight: FONT_WEIGHT.light,
	},
	text: {
		fontSize: FONT_SIZES.medium,
		fontFamily: FONT_FAMILY.text,
		fontWeight: FONT_WEIGHT.light,
		lineHeight: LINE_HEIGHT.medium,
	},
	smallText: {
		fontSize: FONT_SIZES.small,
		fontFamily: FONT_FAMILY.text,
		fontWeight: FONT_WEIGHT.light,
	},
	miniText: {
		fontSize: FONT_SIZES.xSmall,
		fontFamily: FONT_FAMILY.text,
		fontWeight: FONT_WEIGHT.light,
	},
	buttonText: {
		fontSize: FONT_SIZES.small,
		fontFamily: FONT_FAMILY.text,
		fontWeight: FONT_WEIGHT.regular,
		letterSpacing: LINE_SPACING.small,
		textTransform: "uppercase",
	},
};

export default FONT_STYLES;
export { FONT_FAMILY, FONT_WEIGHT, FONT_SIZES, LINE_HEIGHT };

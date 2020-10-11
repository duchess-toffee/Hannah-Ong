import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layouts/layout";
import Hero from "../sections/hero";
import About from "../sections/about";
import Work from "../sections/work2";
import Blog from "../sections/blog";
import Contact from "../sections/contact";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import darkTheme from "../styling/themes/dark-theme";
import lightTheme from "../styling/themes/light-theme";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Home() {
	if (typeof window !== "undefined") {
		require("smooth-scroll")('a[href*="#"]');
	}
	const themeMode = useMediaQuery("(prefers-color-scheme: dark)");

	const [theme, setTheme] = useState(false);
	// const [darkMode, setDarkMode] = useState(lightTheme)
	const [aboutPosition, setAboutPosition] = useState(null);
	const [workPosition, setWorkPosition] = useState(null);
	const [blogPosition, setBlogPosition] = useState(null);
	const [contactPosition, setContactPosition] = useState(null);
	const [sectionIndex, setSectionIndex] = useState(0);

	// useEffect(() => {
	//   if (theme) {
	//     setDarkMode(darkMode)
	//   } else {
	//     setDarkMode(lightTheme)
	//   }
	// }, [theme])

	const mode = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: themeMode ? "dark" : "light",
				},
			}),
		[themeMode]
	);

	const debounce = useCallback((func, wait = 20, immediate = true) => {
		let timeout;
		return function () {
			let context = this,
				args = arguments;
			let later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}, []);

	const handleScroll = useCallback(() => {
		let scrollPosition = window.scrollY;
		if (scrollPosition >= contactPosition || window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			setSectionIndex(4);
		} else if (scrollPosition >= blogPosition) {
			setSectionIndex(3);
		} else if (scrollPosition >= workPosition) {
			setSectionIndex(2);
		} else if (scrollPosition >= aboutPosition) {
			setSectionIndex(1);
		} else {
			setSectionIndex(0);
		}
	}, [aboutPosition, workPosition, blogPosition, contactPosition, sectionIndex]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [aboutPosition, workPosition, blogPosition, contactPosition, handleScroll]);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Hannah Ong's Resume</title>
				<meta name="description" content="Hannah Ong's Resume" />
			</Helmet>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Layout index={sectionIndex} onTheme={setTheme}>
					<Hero />
					<About aboutRef={setAboutPosition} />
					<Work workRef={setWorkPosition} />
					<Blog blogRef={setBlogPosition} />
					<Contact contactRef={setContactPosition} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

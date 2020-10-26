import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { default as MuiDivider } from "@material-ui/core/Divider";

import Layout from "../components/layouts/layout";
import Divider from "../components/dividers/main-divider";
import darkTheme from "../styling/themes/dark-theme";
import lightTheme from "../styling/themes/light-theme";
import FONT_STYLES, { FONT_WEIGHT, LINE_HEIGHT } from "../styling/font-styles";
import COLORS from "../styling/colors";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(5, 2),
	},
	outline: {
		border: `1px solid ${COLORS.white}`,
		margin: theme.spacing(5, 0),
		[theme.breakpoints.down("sm")]: {
			border: "none",
			margin: theme.spacing(0),
		},
	},
	topContainer: {
		padding: theme.spacing(3.5, 3),
	},
	divider: {
		width: "95%",
		alignSelf: "center",
	},
	header: {
		...FONT_STYLES.title,
		lineHeight: LINE_HEIGHT.short,
		textShadow: "none",
	},
	subheader: {
		...FONT_STYLES.subtitle,
		padding: theme.spacing(2, 0, 3, 0),
		[theme.breakpoints.down("xs")]: {
			padding: theme.spacing(5, 0, 3, 0),
		},
	},
	subtitle: {
		...FONT_STYLES.subtitle,
		textTransform: "uppercase",
		fontWeight: FONT_WEIGHT.bold,
	},
	text: {
		...FONT_STYLES.text,
		padding: theme.spacing(0.5, 0),
	},
	smallText: {
		...FONT_STYLES.smallText,
		margin: theme.spacing(0.5, 0),
	},
	miniText: {
		...FONT_STYLES.miniText,
	},
	links: {
		display: "flex",
		alignItems: "center",
	},
	icon: {
		margin: theme.spacing(0, 1),
	},
	bottomContent: {
		margin: theme.spacing(0, 0.5),
	},
	bottomContact: {
		margin: theme.spacing(0),
	},
	company: {
		fontWeight: FONT_WEIGHT.bold,
	},
	jobDetails: {
		...FONT_STYLES.smallText,
		"& > li": {
			margin: theme.spacing(1, 0),
		},
	},
}));

export default function Resume() {
	const classes = useStyles();
	const [theme, setTheme] = useState(false);
	const [sectionIndex] = useState(0);
	const MuiTheme = useTheme();
	const isTablet = useMediaQuery(MuiTheme.breakpoints.down("sm"));
	const isPhone = useMediaQuery(MuiTheme.breakpoints.down("xs"));

	const direction = isPhone ? "column-reverse" : "row";
	const displayTopContact = isPhone ? null : (
		<Grid container item wrap="nowrap">
			<Grid container item wrap="nowrap" justify="center">
				<Link href="https://github.com/duchess-toffee" underline="none" className={classes.links}>
					<GitHubIcon className={classes.icon} />
					<Typography align="center" noWrap className={classes.miniText}>
						duchess-toffee
					</Typography>
				</Link>
			</Grid>
			<Grid container item wrap="nowrap" justify="center">
				<Link href="https://www.linkedin.com/in/hannah-ong/" underline="none" className={classes.links}>
					<LinkedInIcon className={classes.icon} />
					<Typography align="center" noWrap className={classes.miniText}>
						hannah-ong
					</Typography>
				</Link>
			</Grid>
			<Grid container item wrap="nowrap" justify="center">
				<Link href="mailto:hchai1991@gmail.com" underline="none" className={classes.links}>
					<EmailIcon className={classes.icon} />
					<Typography align="center" noWrap className={classes.miniText}>
						hchai1991@gmail.com
					</Typography>
				</Link>
			</Grid>
			<Grid container item wrap="nowrap" justify="center">
				<Link href="https://twitter.com/duchess_toffee" underline="none" className={classes.links}>
					<TwitterIcon className={classes.icon} />
					<Typography align="center" noWrap className={classes.miniText}>
						@duchess_toffee
					</Typography>
				</Link>
			</Grid>
		</Grid>
	);

	if (typeof window !== "undefined") {
		require("smooth-scroll")('a[href*="#"]');
	}

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Hannah Ong</title>
				<meta
					name="description"
					content="Hannah Ong's Resume as a Front-End developer / engineer. See Hannah Ong's work experience at various companies such as Hyperflyer, Mozilla, RingCentral, Instacart, and more. Download available."
				/>
			</Helmet>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Layout index={sectionIndex} onTheme={setTheme}>
					<Grid container direction="column" className={classes.outline}>
						{/* Top Section (Name, Title, Contact) */}
						<Grid container item direction="column" alignItems="center" spacing={4} className={classes.topContainer}>
							{/* Name, Title , Divider*/}
							<Grid container direction="column" alignItems="center" className={classes.topContainer}>
								<Grid item>
									<Typography align="center" className={classes.header}>
										Hannah Ong
									</Typography>
								</Grid>

								<Grid item>
									<Typography align="center" className={classes.subheader}>
										Frontend Developer
									</Typography>
								</Grid>

								{isPhone ? null : (
									<Grid item>
										<Divider />
									</Grid>
								)}
							</Grid>

							{/* Contact Icons */}
							{displayTopContact}

							{/* Divider */}
							<Grid container item justify="center">
								<MuiDivider color="primary" className={classes.divider}></MuiDivider>
							</Grid>
						</Grid>

						{/* Bottom Section (Awards, Stacks, Education, Projects, Experience) */}
						<Grid container item direction={direction} wrap="nowrap">
							{/* Left Side (Awards, Stacks, Education) */}
							<Grid
								container
								item
								direction="column"
								alignItems="flex-end"
								spacing={6}
								xs={isPhone ? 12 : 4}
								className={classes.bottomContent}
							>
								{/* Contact - 2nd time */}
								{isPhone ? (
									<Grid
										container
										item
										direction="column"
										alignItems={isPhone ? "center" : "flex-end"}
										spacing={2}
										className={classes.bottomContact}
									>
										<Grid item>
											<Typography align="right" className={classes.subtitle}>
												CONTACT
											</Typography>
										</Grid>
										<Grid container item direction="column">
											<Grid container item wrap="nowrap" justify={isPhone ? "center" : "flex-end"}>
												<Link href="https://github.com/duchess-toffee" underline="none" className={classes.links}>
													{isPhone ? <GitHubIcon className={classes.icon} /> : null}
													<Typography align="center" noWrap className={classes.smallText}>
														duchess-toffee
													</Typography>
													{isPhone ? null : <GitHubIcon className={classes.icon} />}
												</Link>
											</Grid>
											<Grid container item wrap="nowrap" justify={isPhone ? "center" : "flex-end"}>
												<Link href="https://www.linkedin.com/in/hannah-ong/" underline="none" className={classes.links}>
													{isPhone ? <LinkedInIcon className={classes.icon} /> : null}
													<Typography align="center" noWrap className={classes.smallText}>
														hannah-ong
													</Typography>
													{isPhone ? null : <LinkedInIcon className={classes.icon} />}
												</Link>
											</Grid>
											<Grid container item wrap="nowrap" justify={isPhone ? "center" : "flex-end"}>
												<Link href="mailto:hchai1991@gmail.com" underline="none" className={classes.links}>
													{isPhone ? <EmailIcon className={classes.icon} /> : null}
													<Typography align="center" noWrap className={classes.smallText}>
														hchai1991@gmail.com
													</Typography>
													{isPhone ? null : <EmailIcon className={classes.icon} />}
												</Link>
											</Grid>
											<Grid container item wrap="nowrap" justify={isPhone ? "center" : "flex-end"}>
												<Link href="https://twitter.com/duchess_toffee" underline="none" className={classes.links}>
													{isPhone ? <TwitterIcon className={classes.icon} /> : null}
													<Typography align="center" noWrap className={classes.smallText}>
														@duchess_toffee
													</Typography>
													{isPhone ? null : <TwitterIcon className={classes.icon} />}
												</Link>
											</Grid>
										</Grid>
									</Grid>
								) : null}

								{/* Awards */}
								<Grid container item direction="column" alignItems={isPhone ? "center" : "flex-end"} spacing={2}>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.subtitle}>
											AWARDS
										</Typography>
									</Grid>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.smallText}>
											Grand prize winner
											<br />
											<span className={classes.miniText}>Maintainer Must-Haves Category</span>
											<br />
											<span className={classes.miniText}>Dev.to GitHub Actions Hackathon 2020</span>
										</Typography>
									</Grid>
								</Grid>

								{/* FrontEnd Stack */}
								<Grid container item direction="column" alignItems={isPhone ? "center" : "flex-end"} spacing={2}>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.subtitle}>
											FRONTEND STACK
										</Typography>
									</Grid>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.smallText}>
											HTML5
											<br />
											CSS
											<br />
											JavaScript
											<br />
											React
											<br />
											TypeScript
											<br />
											Jest
											<br />
											Gatsby
											<br />
											Figma
											<br />
										</Typography>
									</Grid>
								</Grid>

								{/* BackEnd Stack */}
								<Grid container item direction="column" alignItems={isPhone ? "center" : "flex-end"} spacing={2}>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.subtitle}>
											BACKEND STACK
										</Typography>
									</Grid>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.smallText}>
											Docker
											<br />
											GraphQL
											<br />
											Express.js
											<br />
											Serverless
											<br />
											AWS Lambda
										</Typography>
									</Grid>
								</Grid>

								{/* Education */}
								<Grid container item direction="column" alignItems={isPhone ? "center" : "flex-end"} spacing={2}>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.subtitle}>
											EDUCATION
										</Typography>
									</Grid>
									<Grid item>
										<Typography align={isPhone ? "center" : "right"} className={classes.smallText}>
											University of CA, Davis
											<br /> <span className={classes.miniText}>Bachelor of Arts, English</span>
											<br /> <span className={classes.miniText}>Sept 2009 - Sept 2012</span>
										</Typography>
									</Grid>
								</Grid>

								{/* Projects Content */}
								{/* <Grid container item direction="column" alignItems="flex-end" spacing={2}>
								<Grid item>
									<Typography align="right" className={classes.subtitle}>
										PERSONAL PROJECTS
									</Typography>
								</Grid>
								<Grid item>
									<Typography align="right" className={classes.smallText}>
										<Link href="https://moreeyesplz.com">More Eyes, Plz! 👀</Link>
									</Typography>
									<Typography align="right" className={classes.smallText}>
										<Link href="https://github.com/duchess-toffee/squidy">Squidy 🦑</Link>
									</Typography>
								</Grid>
							</Grid> */}

								{/* Image Content */}
								{/* <Grid container item direction="column" alignItems="flex-end" spacing={2}>
								<Grid item>
									<Typography align="right">
										<img src={Image} alt="profile" />
									</Typography>
								</Grid>
							</Grid> */}
							</Grid>

							{/* Right Side (Projects, Experience) */}
							<Grid
								container
								item
								direction="column"
								spacing={6}
								xs={isPhone ? 12 : 8}
								className={classes.bottomContent}
							>
								{/* Projects */}
								<Grid container item direction="column" spacing={2}>
									<Grid item>
										<Typography className={classes.subtitle}>Personal Projects</Typography>
									</Grid>
									<Grid item>
										<Typography className={classes.text}>
											<Link href="https://moreeyesplz.com">
												👀 <u>More Eyes, Plz!</u> :
											</Link>{" "}
											A simple way to crowdsource feedback on your GitHub commits
										</Typography>
										<Typography className={classes.text}>
											<Link href="https://github.com/duchess-toffee/squidy">
												🦑 <u>Squidy</u>
											</Link>{" "}
											: A Google Calendar add-on that lets you record, save, and email personal event notes.
										</Typography>
									</Grid>
								</Grid>

								<MuiDivider color="primary" className={classes.divider} />

								{/* Experience */}
								<Grid container item direction="column" spacing={2}>
									<Grid item>
										<Typography className={classes.subtitle}>Experience</Typography>
									</Grid>

									{/* Experience 1 - Hyperflyer */}
									<Grid container item direction="column">
										{/* Metadata */}
										<Grid container item direction="column">
											<Grid item>
												<Typography className={classes.text}>
													<span className={classes.company}>Hyperflyer</span> -{" "}
													<span className={classes.smallText}>Software Development Intern</span>
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={classes.miniText}>August 2020 - Present | San Francisco, CA</Typography>
											</Grid>
										</Grid>

										{/* Details */}
										<Grid container item>
											<ul className={classes.jobDetails}>
												<li>
													<b>Partnered with design</b> to build products for desktop/tablet/mobile
												</li>
												<li>
													Built the business facing website using <b>Gatsby, React, TypeScript</b>
												</li>
												<li>
													Developed a Gatsby site that grabbed data from <b>WordPress posts via GraphQL</b>
												</li>
												<li>
													Composed an <b>AWS Lambda to send contact form data via AWS SMTP SES and Serverless</b>
												</li>
												<li>
													Implemented SEO, sitemapping, performance, and <b>web development best practices</b>
												</li>
											</ul>
										</Grid>
									</Grid>

									{/* Experience 2 - Mozilla */}
									<Grid container item direction="column">
										{/* Metadata */}
										<Grid container item direction="column">
											<Grid item>
												<Typography className={classes.text}>
													<span className={classes.company}>Mozilla</span> -{" "}
													<span className={classes.smallText}>Sr. HRIS Analyst</span>
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={classes.miniText}>
													July 2018 - February 2020 | San Francisco, CA
												</Typography>
											</Grid>
										</Grid>

										{/* Details */}
										<Grid container item>
											<ul className={classes.jobDetails}>
												<li>
													<b>Built, improved, and owned HRIS </b> business processes, integrations, reports, dashboards,
													and system updates
												</li>
												<li>
													<b>Owned projects end to end</b>, managing complexity and engaging directly with stakeholders
													to think through business impact, reliability, operability, etc.
												</li>
												<li>
													Scoped, designed, tested, and implemented{" "}
													<b>HRIS solutions to improve stability and scalability</b>
												</li>
												<li>
													<b>Provided HRIS feedback and advice for best practices and standards</b> to teams during
													project planning and decision making
												</li>
												<li>
													<b>Executed leader vision</b> based on roadmap and business needs
												</li>
											</ul>
										</Grid>
									</Grid>

									{/* Experience 3 - RingCentral */}
									<Grid container item direction="column">
										{/* Metadata */}
										<Grid container item direction="column">
											<Grid item>
												<Typography className={classes.text}>
													<span className={classes.company}>RingCentral</span> -{" "}
													<span className={classes.smallText}>HRIS Analyst</span>
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={classes.miniText}>November 2017 - June 2018 | Belmont, CA</Typography>
											</Grid>
										</Grid>

										{/* Details */}
										<Grid container item>
											<ul className={classes.jobDetails}>
												<li>
													Managed the HRIS performance & bonus process end to end--
													<b>planning, configuring, testing, launching, and closing processes</b>
												</li>
												<li>
													Created and maintained <b>dashboards and reports for business leaders</b> to track workforce
													data on attrition, diversity, gender, onboarding, etc.
												</li>
												<li>
													<b>Led company-wide HRIS trainings</b> on processes for adoption & usability
												</li>
												<li>
													Supported and troubleshot <b>integrations between HR systems</b> to teams during project
													planning and decision making
												</li>
												<li>
													<b>Served as the SME</b> for HRIS system configuration, security, business processes,
													reports/dashboards & integrations
												</li>
											</ul>
										</Grid>
									</Grid>

									{/* Experience 4 - Instacart */}
									<Grid container item direction="column">
										{/* Metadata */}
										<Grid container item direction="column">
											<Grid item>
												<Typography className={classes.text}>
													<span className={classes.company}>Instacart</span> -{" "}
													<span className={classes.smallText}>People Operations Coordinator</span>
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={classes.miniText}>
													March 2016 - October 2017 | San Francisco, CA
												</Typography>
											</Grid>
										</Grid>

										{/* Details */}
										<Grid container item>
											<ul className={classes.jobDetails}>
												<li>
													Partnered with departments to <b>build/update HRIS business processes</b>
												</li>
												<li>
													<b>Supported business leaders with HR data and metrics</b> via custom reports
												</li>
												<li>
													Managed and configured <b>HR system security</b> for business processes, domains/functional
													areas, reports/dashboards, and user roles
												</li>
												<li>
													Drove <b>HR data integrity</b> for all HR systems with regular audits, updates, and reporting
												</li>
												<li>
													Provided <b>guidance, troubleshooting, and user-friendly documentation</b> for HR systems,
													data, and processes for 10,000+ end-users
												</li>
											</ul>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Layout>
			</ThemeProvider>
		</>
	);
}

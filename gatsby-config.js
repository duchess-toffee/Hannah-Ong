module.exports = {
  siteMetadata: {
    title: `Hannah Ong`,
    description: `Hannah Ong. 💻 Web Developer. 🎨 Occasional Designer. 🧗‍ Boulderer. 🌷 Amateur Gardener. 🐕 Dog Owner and Lover. See photos, work, blog posts, and additional information about Hannah Ong / duchess-toffee.`,
    siteUrl: "https://hannahong.dev"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://hannahong.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Hannah Ong",
        short_name: "Hannah Ong",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "standalone",
        icon: "src/images/favicon/favicon.png",
        icon_options: {
          purpose: `maskable`,
        },
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-177217787-2",
        head: false,
        anonymize: true,
        respectDNT: true,
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // pageTransitionDelay: 0,
        // defer: false,
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "https://hannahong.dev",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ],
}
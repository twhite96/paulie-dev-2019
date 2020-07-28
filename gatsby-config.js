require("dotenv").config()

module.exports = {
  siteMetadata: {
    name: "Paul Scanlon",
    description:
      "I'm a Front End Developer / UX Engineer based in Worthing | London / UK. React, Gatsby, JavaScript, TypeScript/Flow, StyledComponents, Theme UI, Storybook, TDD (Jest/Enzyme/React Testing Libary) and a tiny bit of Node and FaunaDB",
    keywords: [
      "React",
      "Gatsby",
      "JavaScript",
      "TypeScript",
      "Flow",
      "StyledComponents",
      "Theme UI",
      "Jest",
      "Enzyme",
      "React Testing Libary",
      "Node.js",
      "Fauna",
      "FaunaDB",
      "JAMStack",
      "Component Library",
    ],
    siteUrl: "https://paulie.dev",
    siteImage: "images/paulie-open-graph-image.jpg",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 200,
    },
  },
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts", "writing"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul Scanlon`,
        short_name: `Ps`,
        start_url: `/`,
        lang: `en`,
        background_color: `#282a36`,
        theme_color: `#ff79c6`,
        display: `standalone`,
        icon: `src/manifesticon-512x512.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-4",
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' www.google-analytics.com",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data: www.google-analytics.com",
        },
      },
    },
  ],
}

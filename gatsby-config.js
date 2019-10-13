module.exports = {
  pathPrefix: "/notesbymaris",
  siteMetadata: {
    title: 'Notes by maris',
    siteUrl: 'https://marissap.github.io/notesbymaris/',
    pathPrefix: "/notesbymaris",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-notes-by-maris',
        short_name: 'notesbymaris',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-offline'    
  ],
}

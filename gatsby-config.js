module.exports = {
<<<<<<< HEAD
  pathPrefix: "/notesbymaris",
=======
  pathPrefix: "/reponame",
>>>>>>> b6fd0544c6c6ba427c3722515a9a59c11b1462a7
  siteMetadata: {
    title: 'Notes by maris',
    siteUrl: 'https://marissap.github.io/notesbymaris/',
    pathPrefix: "/notesbymaris",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
  ],
}

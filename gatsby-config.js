module.exports = {
  pathPrefix: "/notesbymaris",
  siteMetadata: {
    title: 'Notes by Maris | Marissa Phul',
    siteUrl: 'https://marissap.github.io/notesbymaris/',
    pathPrefix: "/notesbymaris",
  },
  plugins: [    
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
        icon: 'src/images/MARIS.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-normalize-paths",
              options: {
              pathFields: ["image"],
              },
          }
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

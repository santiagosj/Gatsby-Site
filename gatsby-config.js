module.exports = {
  pathPrefix: ``, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Gatsby Hyperspace - Open-Source Starter | AppSeed',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name:'generic',
        path: './data'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hyperspace',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
     
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};

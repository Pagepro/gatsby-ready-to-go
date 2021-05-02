const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Ready To Go`,
    description: `Everything you need to create an amazing Gatsby project`,
    author: `Pagepro`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-svg',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        setup: path.join(__dirname, 'src/setup'),
        hooks: path.join(__dirname, 'src/hooks'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
  ],
  pathPrefix: `/your-project-name`,
};

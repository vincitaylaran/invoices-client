module.exports = {
  siteMetadata: {
    title: "invoices",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-ts",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "http://localhost:4000/",
      },
    },
  ],
}

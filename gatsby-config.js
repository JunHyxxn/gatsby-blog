module.exports = {
  siteMetadata: {
    title: "JunHyxxn GatsBy Blog",
    description: "Inha Univ. Department of Statistics & CS",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

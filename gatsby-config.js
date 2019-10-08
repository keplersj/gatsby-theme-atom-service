module.exports = options => {
  const contentPath = options.contentPath || "./content/data/";
  const assetPath = options.contentPath || "./content/assets/";
  const renderConsumers = options.renderConsumers || true;
  const renderProviders = options.renderProviders || true;
  const basePath = options.basePath || "/";

  return {
    plugins: [
      "gatsby-plugin-material-ui",
      "gatsby-plugin-lodash",
      "gatsby-transformer-yaml",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: contentPath
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          path: assetPath
        }
      },
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-typescript"
    ]
  };
};

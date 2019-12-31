module.exports = options => {
  const contentPath = options.contentPath || "./content/data/";
  const assetPath = options.contentPath || "./content/assets/";
  const renderConsumers = options.renderConsumers || true;
  const renderProviders = options.renderProviders || true;
  const basePath = options.basePath || "/";

  return {
    siteMetadata: {
      title: "Example Atom Service",
      siteUrl: "https://example.dev",
      description: "Gatsby site built using gatsby-theme-atom-service",
      color: {
        primary: "#efeae1",
        secondary: "#66595c",
        active: "#81c08b"
      },
      nav: [
        {
          name: "Atom Package Manager",
          url: "https://atom.dev/packages/example"
        },
        {
          name: "GitHub",
          url: "https://github.dev/example/example"
        }
      ]
    },
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

module.exports = function getThemeDefaults(themeOptions) {
  const contentPath = themeOptions.contentPath || "./content/data/";
  const assetPath = themeOptions.contentPath || "./content/assets/";
  const renderConsumers = themeOptions.renderConsumers || true;
  const renderProviders = themeOptions.renderProviders || true;
  const basePath = themeOptions.basePath || "/";

  return {
    contentPath,
    assetPath,
    renderConsumers,
    renderProviders,
    basePath
  };
};

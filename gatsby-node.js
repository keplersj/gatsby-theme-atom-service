const path = require("path");
const fs = require("fs");

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();
  const contentPath = themeOptions.contentPath || "./content/";

  const dirs = [path.join(program.directory, contentPath)];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

const CurationPage = require.resolve("./src/components/CurationPage/index.tsx");

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions;
  const basePath = themeOptions.basePath || "/";

  // Create the curration page
  createPage({
    path: basePath,
    component: CurationPage,
    context: {}
  });
};

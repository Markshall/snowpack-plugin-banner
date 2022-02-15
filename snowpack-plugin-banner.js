const dedent = require("dedent");

module.exports = (snowpackConfig, pluginOptions) => {
  return {
    name: "snowpack-plugin-banner",

    transform({ filePath, contents, isDev, fileExt }) {
      if (isDev) return contents;
      if (![".js", ".css"].includes(fileExt)) return contents;

      const { banner, position = "top", include = [] } = pluginOptions;

      const bannerContents = getFileContents(contents, banner, position);

      // only add banner to certain files
      if (include?.length) {
        if (include.includes(filePath)) {
          return bannerContents;
        }
      } else {
        return bannerContents;
      }
    },
  };
};

const getFileContents = (contents, banner, position = "top") => {
  let result = dedent(banner) + contents;
  if (position === "bottom") {
    result = contents + dedent(banner);
  }

  return result;
};

const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => {
  console.log({minimize: env.minimize});
  return Object.assign({}, {}, {
    devtool: "source-map",

    output: {
      filename: "./dist/[name].js",
    },

    entry: {
      JsEntry: "./src/JsEntry.js",
    },

    mode: "production",
    optimization: env.minimize ? {
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
        }),
      ],
    } : {
      minimize: false,
    },
  });
};

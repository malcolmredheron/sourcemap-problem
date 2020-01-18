module.exports = env => {
  console.log({minimize: env.minimize});
  return Object.assign({}, {
    devtool: "source-map",

    output: {
      filename: "./dist/[name].js",
    },

    entry: {
      JsEntry: "./src/JsEntry.js",
    },

    mode: "production"
  }, env.minimize ? {} : {
    optimization: {minimize: false}
  });
};

module.exports = env => {
  console.log({minimize: env.minimize});
  return {
    devtool: "source-map",

    output: {
      filename: "./dist/[name].js",
    },

    entry: {
      JsEntry: "./src/JsEntry.js",
    },

    mode: "production",
    optimization: env.minimize ? {
      minimize: true,
    } : {
      minimize: false,
    },
  };
};

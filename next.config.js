require("dotenv").config();
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = {
  // enableSvg: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000, //,
          // name: "[name].[ext]"
        },
      },
    });

    // config.node = {
    //   fs: "empty",
    // };
    return config;
  },
  env: {
    SERVER_URI: process.env.SERVER_URI || "http://localhost:5000",
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); 

const config = {
    entry: "./src/app/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js",
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.png$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
  };

module.exports = config;

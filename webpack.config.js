/* eslint-disable prettier/prettier */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const stylesHandler = "style-loader";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve:{extensions:['.js','.jsx']},
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "index.html",
  //   }),
    new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test:/\.js$/,
        use:'babel-loader',
        },
        {
            test:/\.jsx$/,
            use:'babel-loader',
        },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.scss$/,
				use: [stylesHandler,
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							minimize: true,
							sourceMap: true
						}
					},
					{
						loader: "sass-loader"
					}
				]
			},
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: "asset",
      // },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

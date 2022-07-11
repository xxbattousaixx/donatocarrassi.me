/* eslint-disable prettier/prettier */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: path.resolve(__dirname, 'src/') + '/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    modules: [path.resolve(__dirname,'src'),'node_modules'],
    fallback: {
      "stream": false,
      "zlib": false,
      "buffer": false
    },
    extensions: ['.js', '.jsx']
},
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    
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
        use: [
          {
        loader:'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/env', '@babel/react']
        }
      },
    ],        
  },
        {
            test:/\.jsx$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  presets: ['@babel/react', '@babel/env']
                }
              },
            ],        
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
       test: /\.s[ca]ss/i,
				use: [stylesHandler,
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
				
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

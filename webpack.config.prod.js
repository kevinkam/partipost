const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "production",
  entry: {
    bundle: "./src/js/index.tsx"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/"
  },
  devServer: {
    publicPath: "/dist/",
    compress: true,
    port: 8080,
    historyApiFallback: {
      rewrites: [{ from: /./, to: "/dist/index.html" }]
    }
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      images: path.resolve(__dirname, "src/images"),
      css: path.resolve(__dirname, "src/css")
    }
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: path.join(__dirname, "node_modules")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|otf|ttf|svg|eot)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: ["babel-loader"],
        exclude: path.join(__dirname, "node_modules")
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: path.resolve(__dirname, "node_modules"),
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html"
    })
  ]
  // plugins: [
  //   new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: "vendor",
  //     filename: "vendor.js",
  //     minChunks: function(module) {
  //       // this assumes your vendor imports exist in the node_modules directory
  //       return module.context && module.context.includes("node_modules")
  //     },
  //     chunks: ["bundle"]
  //   })
  // ]
}

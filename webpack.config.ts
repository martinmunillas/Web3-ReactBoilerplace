import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

const config: webpack.Configuration = {
  entry: "./src/frontend",
  output: {
    path: path.resolve(__dirname, "./build/frontend"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        NODE_ENV: "development",
      }),
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  devtool: "source-map",
};

export default config;

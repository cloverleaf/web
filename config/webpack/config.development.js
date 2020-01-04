const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

new webpack.SourceMapDevToolPlugin({
	filename: "[file].map",
	publicPath: path.resolve(__dirname, "../../bundles")
}),

module.exports = {
	mode: "development",
	target: "web",

	plugins: [
		new FriendlyErrorsWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "src/src.html",
			filename: path.join(__dirname,"../../index.html"),
			inject: "head",
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["source-map-loader"],
				enforce: "pre"
			},
			{
				test: /\.(s*)css$/,
				use: [
					"style-loader",
					{
						loader: MiniCssExtractPlugin.loader,
						options: {hmr: true}
					},
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							plugins: () => {return [require("autoprefixer")]}
						}
					},
					"sass-loader"
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)?$/,
				use: [{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "fonts/"
					}
				}]
			}
		]
	},

	entry: "./src/main.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "../../bundles"),
	},


	devtool: "source-map",
	devServer: {
		compress: true,
		contentBase: "./",
		port: 8080,
		open: true,
		// For FriendlyErrorsWebpackPlugin
		quiet: true,
	}

}
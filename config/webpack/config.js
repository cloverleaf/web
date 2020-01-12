const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	target: "web",

	plugins: [
		new HtmlWebpackPlugin({
			template: "src/src.html",
			filename: path.join(__dirname,"../../index.html"),
			inject: "head",
			minify: {
				minifyJS: true,
				removeComments: true,
				collapseWhitespace: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: "bundle-[Contenthash:8].css",
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {loader: "eslint-loader", options: {configFile: ".eslintrc.json", emitWarning: true}},
				enforce: "pre"
			},
			{
				test: /\.(s*)css$/,
				use: [
					"style-loader",
					MiniCssExtractPlugin.loader,
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
		filename: "bundle-[Contenthash:8].js",
		path: path.resolve(__dirname, "../../bundles")
	}
};
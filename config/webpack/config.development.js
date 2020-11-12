const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const webpack = require("webpack");

// Read json
const json = JSON.parse(fs.readFileSync(path.join(__dirname, "../../src/strings.json"), "utf8"));

const replacements = {};

for (var k in json) {
	replacements[k] = json[k].message;
}

module.exports = {
	mode: "development",
	target: "web",

	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "src/src.ejs",
			filename: "index.html",
			inject: "head",
			templateParameters: replacements
		}),
		new webpack.ProvidePlugin({
			Component: "exports-loader?Component!materialize-css/js/component.js"
		})
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
							plugins: () => [require("autoprefixer")]
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
		filename: "main.js"
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

};
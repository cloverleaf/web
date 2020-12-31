const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const webpack = require("webpack");

// Read strings json
const json = JSON.parse(fs.readFileSync(path.join(__dirname, "../../src/strings.json"), "utf8"));

//
const eo = JSON.parse(fs.readFileSync(path.join(__dirname, "../../langs/eo/eo-UY.json"), "utf8"));


const replacements = {};
const eoReplacements = {};

for (const k in json) {
	replacements[k] = json[k].message;
}

for (const k in json) {
	eoReplacements[k] = eo[k].message;
}

module.exports = {
	mode: "development",
	target: "web",
	// amd: true,

	plugins: [
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "src/src.ejs",
			filename: "index.html",
			inject: "head",
			templateParameters: replacements
		}),
		new HtmlWebpackPlugin({
			template: "src/src.ejs",
			filename: "eo-UY.html",
			inject: "head",
			templateParameters: eoReplacements
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
					"css-loader",
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
		// static: "./",
		port: 8080,
		open: true,
		host: "localhost"
	}

};
// const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const webpackDevServer = require("webpack-dev-server");
const translation = require("./translation.js");


const configPromise = new Promise(function (resolve, reject) {

	setTimeout(() => {

		translation.then( plugins => {

			const config = {
				mode: "development",
				target: "web",

				plugins: plugins.concat([
					new MiniCssExtractPlugin()
				]),

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
					// quiet: true,
				}

			};

			resolve(config);

		});}
	, 1000);
});


configPromise
	// Passes the config to webpack
	.then(config => {

		const compiler = webpack(config);

		// webpack-dev-server --inline --watch --hot --config config/webpack/config.development.js

		const devServerOptions = Object.assign({}, config.devServer, {
			open: true,
			inline: true,
			hot: true
		});

		const server = new webpackDevServer(compiler, devServerOptions);

		server.listen(8080, "127.0.0.1", () => {
			console.log("Starting server on http://localhost:8080");
		});
	});
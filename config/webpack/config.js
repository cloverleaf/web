const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const rimraf = require("rimraf");
const translation = require("./translation.js");

// Wipe old bundles
rimraf.sync("bundles/");

// Wipe old compiled html
const dirpath = path.join(__dirname, "../../");

fs.readdir(dirpath, function (err, files) {
	const txtFiles = files.filter(el => path.extname(el) === ".html" && el !== "faq.html");

	for (let i = 0; i < txtFiles.length; i++) {
		const element = txtFiles[i];
		rimraf.sync(path.join(dirpath, element));
	}
	// do something with your files, by the way they are just filenames...
});

const configPromise = new Promise(function (resolve, reject) {

	setTimeout(() => {

		translation.then( plugins => {

			const config = {
				mode: "production",
				target: "web",

				plugins: plugins.concat([
					new MiniCssExtractPlugin({
						filename: "bundle-[Contenthash:8].css",
					})
				]),

				module: {
					rules: [{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: "eslint-loader",
							options: {
								configFile: "config/.eslintrc.json",
								emitWarning: true
							}
						},
						enforce: "pre"
					},
					{
						test: /\.(s*)css$/,
						use: [
							MiniCssExtractPlugin.loader,
							{
								loader: "css-loader",
								options: {
									importLoaders: 1
								}
							},
							{
								loader: "postcss-loader",
								options: {
									config: {
										path: "config/"
									}
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
					},
					]
				},

				entry: "./src/main.js",
				output: {
					filename: "bundle-[Contenthash:8].js",
					path: path.resolve(__dirname, "../../bundles")
				}
			};

			resolve(config);

		});}
	, 1000);
});

// module.exports = configPromise;
configPromise
	// Passes the config to webpack
	.then(config => webpack(config))
	// Compile
	.then( compiler => {
		compiler.run((err, stats) => { // Stats Object
			if (err) console.error(err);
			console.log(stats.toString());
		});
	});
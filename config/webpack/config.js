const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");
const rimraf = require("rimraf");
const translation = require("./translation.js");
const SriPlugin = require("webpack-subresource-integrity");
const TerserPlugin = require("terser-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

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

				optimization: {
					minimize: true,
					minimizer: [new TerserPlugin({
						terserOptions: {
							compress: {
								defaults: true
							},
							keep_classnames: false,
							keep_fnames: false,
							mangle: {
								toplevel: true,
								eval: true,
								reserved: [
									"minLength",
									"defaultMinLength",
									"maxLength",
									"defaultMaxLength",
								]
							},
						},
						extractComments: {filename:"LICENSE.txt"},
					}
					)],
				},

				plugins: plugins.concat([
					new MiniCssExtractPlugin({
						filename: "bundle-[Contenthash:8].css",
					}),
					new SriPlugin({
						hashFuncNames: ["sha256"],
						enabled: process.env.NODE_ENV === "production",
					}),
					new webpack.ProvidePlugin({Component: "exports-loader?Component!materialize-css/js/component.js"}),
					new HardSourceWebpackPlugin()
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
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: "babel-loader",
							options: {
								presets: ["@babel/preset-env"],
								plugins: ["@babel/plugin-transform-runtime"]
							}
						}
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
					crossOriginLoading: "anonymous",
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
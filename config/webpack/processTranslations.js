const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const lc = require("locale-code");


function processTranslations () {
	const partsStart = [
		"/",
		"/faq"
	];
	const pluginsStart = [];
	const langs = {};

	console.log("Processing translations");

	const folders = fs.readdirSync(path.join(__dirname, "../../langs/"));

	// For each lang folder
	folders.forEach(function (folder) {

		// List the files in the folder
		const files = fs.readdirSync(path.join(__dirname, "../../langs/" + folder));

		// For each language in folder
		files.forEach(function (file) {

			const code = file.split(".")[0];

			// Read json
			const json = JSON.parse(fs.readFileSync(path.join(__dirname, `../../langs/${folder}/${file}`), "utf8"));


			const current = {};
			current.replacements = {};


			for (var k in json) {
				current.replacements[k] = json[k].message;
			}

			// Set path val
			current.path = file === "en-GB.json" ? "index.html" : code + ".html";

			langs[code] = {
				native: lc.getLanguageNativeName(code),
				// english: lc.getLanguageName(code)
			};

			// Add plugin instance to array
			pluginsStart.push(
				new HtmlWebpackPlugin({
					template: "./src/src.ejs",
					filename: path.join(__dirname, `../../${current.path}`),
					inject: "head",
					minify: {
						minifyJS: true,
						removeComments: true,
						collapseWhitespace: true
					},
					templateParameters: current.replacements
				})
			);

			partsStart.push(
				code
			);
		});
	});

	// Write langs to json
	fs.writeFileSync(path.join(__dirname, "../../langs/langs.json"), JSON.stringify(langs));

	console.log("Finished processing translations");

	return [pluginsStart, partsStart];

}

module.exports = processTranslations;

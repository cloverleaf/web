const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const unzipper = require("unzipper");
const fetch = require("node-fetch");
const rimraf = require("rimraf");
const lc = require("locale-code");

const pluginsStart = [];
const langs = {};
const CrowdinKey = fs.readFileSync(path.join(__dirname, "../crowdin-key.txt"), "utf8");
let skip = false;

// Wipe old translations
rimraf.sync("langs/");


async function unzip () {
	const directory = await unzipper.Open.file(path.join(__dirname, "temp.zip"));
	await directory.extract({
		path: path.join(__dirname, "../../langs/")
	});
	return "done";
}

module.exports = new Promise(function (resolve, reject){

	// Build translations
	fetch(`https://api.crowdin.com/api/project/cloverleaf/export?key=${CrowdinKey}`).then(res => res.text())
		.then(data => {
			if (data.includes("success status=\"skipped\"")) {
				console.log("Translations up to date");
			} else {
				console.log("Updating translations");
			}
			// Download translations
			return fetch(`https://api.crowdin.com/api/project/cloverleaf/download/all.zip?key=${CrowdinKey}`);
		}).then(res => res.buffer())
		.then(zip => {

			// Unzip translations

			// Write to temp file locally
			fs.writeFileSync(path.join(__dirname, "temp.zip"), zip);

			// Make langs folder
			var dir = path.join(__dirname, "../../langs/");

			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir);
			}

			// Extract zip to langs folder
			return unzip();

		}).then(unzipped => {

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
						english: lc.getLanguageName(code)
					};

					// Add plugin instance to array
					pluginsStart.push(
						new HtmlWebpackPlugin({
							template: "./src/src.html",
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

				});
			});

			// Write langs to json
			fs.writeFileSync(path.join(__dirname, "../../langs/langs.json"), JSON.stringify(langs));

			// Remove temp file
			rimraf.sync(path.join(__dirname, "temp.zip"));

			// Make plugin instance
			resolve(pluginsStart);

		});
});


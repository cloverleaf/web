const path = require("path");
const fs = require("fs");
const unzipper = require("unzipper");
const fetch = require("node-fetch");
const rimraf = require("rimraf");
const processTranslations = require("./processTranslations.js");

const CrowdinKey = fs.readFileSync(path.join(__dirname, "../crowdin-key.txt"), "utf8");

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

			// Make plugin instance
			resolve(processTranslations());

			// Remove temp file
			rimraf.sync(path.join(__dirname, "temp.zip"));

		});
});

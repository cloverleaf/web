/* global M */

// Import what we need from materialize
import "materialize-css/js/cash.js";
import "materialize-css/js/component.js";
import "materialize-css/js/global.js";
import "materialize-css/js/anime.min.js";
import "materialize-css/js/tooltip.js";
import "materialize-css/js/forms.js";
import "materialize-css/js/autocomplete.js";
import "materialize-css/js/tabs.js";
import "materialize-css/js/sidenav.js";
import "materialize-css/js/toasts.js";
import "materialize-css/js/buttons";
import "materialize-css/js/dropdown";
import "materialize-css/js/waves";

import "./style.scss";

import {keccak512} from "js-sha3";
Math.seedrandom = require("seedrandom");


const jsonData = require("../data/sites.json");
const themeData = require("../data/themes.json");
const langData = require("../langs/langs.json");
const autoCompleteData = {}; // Here for scope perposes
const defaultMinLength = 4; // We
const defaultMaxLength = 512; // All
let minLength = defaultMinLength; // Are,
let maxLength = defaultMaxLength; // Really
const defaultTheme = "Vanilla";
const debugMode = false;
const extension = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? ".html" : ""; // Fix links if running locally
let mode;
const possibleRequirements = {
	cap: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	low: "abcdefghijklmnopqrstuvwxyz",
	num: "0123456789",
	special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};
const targetLength = 16;
// let select; // Theme selector
let chosen = false; // Current preset (False if no preset)

/**
 * @param  {String} passedTheme - Changes the theme and updates the cookie to match
 */
window.changeTheme = function (passedTheme) {

	// Invalid theme
	if (!themeData[passedTheme]) {
		throw new Error(`Invalid theme "${passedTheme}" `);
	}

	setStored("theme", passedTheme);

	document.documentElement.style.setProperty("--accentColor", themeData[passedTheme].accent);
	document.documentElement.style.setProperty("--lightAccent", themeData[passedTheme].lightAccent);
	document.documentElement.style.setProperty("--textColor", themeData[passedTheme].text);
	document.documentElement.style.setProperty("--backgroundColor", themeData[passedTheme].background);
	document.documentElement.style.setProperty("--internalColor", themeData[passedTheme].internal);
	document.documentElement.style.setProperty("--incorrectColor", themeData[passedTheme].incorrect);
	document.documentElement.style.setProperty("--correctColor", themeData[passedTheme].correct);
	document.documentElement.style.setProperty("--inputColor", themeData[passedTheme].inputColor);
	document.documentElement.style.setProperty("--linkColor", themeData[passedTheme].linkColor);
	document.documentElement.style.setProperty("--highlightColor", themeData[passedTheme].highlightColor);
	document.documentElement.style.setProperty("--underlineColor", themeData[passedTheme].underlineColor);

};

// Change theme to stored before the page loads to avoid flicker.
window.changeTheme(getStored("theme") ? getStored("theme") : defaultTheme);


/**
 * Gets a cookie
 * @param  {string} name - The name of the cookie to retrive
 * @returns {(string|undefined)} - Value of the cookie | If there is no cookie, undefined
 */
function getStored (name) {
	return localStorage.getItem(name);
}

/**
 * Sets a cookie to a certain value
 * @param  {string} name - The name of the cookie to set
 * @param  {string} value -  The value to set that cookie to
 * @returns {void}
 */
function setStored (name, value) {
	localStorage.setItem(name, value);
}

function checkDebug () {
	if (debugMode) {
		document.title += ` - Debug ${new Date().getTime()}`;
		console.debug("Enabling debug css");
		const link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("type", "text/css");
		link.setAttribute("href", "debug.css");
		document.getElementsByTagName("head")[0].appendChild(link);

		// Add select option for an all #ff00ff theme

		themeData.testTheme = {
			"accent": "#ff00ff",
			"lightAccent": "#ff00ff",
			"text": "#ff00ff",
			"background": "#ff00ff",
			"internal": "#ff00ff",
			"incorrect": "#ff00ff",
			"correct": "#ff00ff",
			"inputColor": "#ff00ff",
			"linkColor": "#ff00ff",
			"highlightColor": "#ff00ff",
			"underlineColor": "#ff00ff"
		};

		const themeOption = document.createElement("option");
		themeOption.onclick = "changeTheme('testTheme')";
		themeOption.id = "testTheme";
		themeOption.innerHTML = "testTheme";
		document.querySelector("#options .input-field select").appendChild(themeOption);

		const css = "a[id=testTheme]{background-color: #ff00ff !important; border: 1px ;}a[id=testTheme] i {color: #ff00ff";
		const style = document.createElement("style");
		style.type = "text/css";
		if (style.styleSheet) {
			// This is required for IE8 and below.
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		document.getElementsByTagName("head")[0].appendChild(style);

	}

	// If running locally
	if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {

		// Change the page title so I can tell the tabs apart
		document.title += " - LocalHost";

		// Fix faq link
		document.getElementById("faq").href += ".html";

	// If the user is on the dev build
	} else if(location.hostname === "dev.cloverleaf.app") {

		// Change title
		document.title += " - Dev Build";

		// Change favicon
		var link = document.createElement("link");
		link.rel = "shortcut icon";
		link.href = "dev.ico";
		document.head.appendChild(link);
	}
}

function getQueryStrings () {
	const assoc = {};
	const decode = function (s) {
		return decodeURIComponent(s.replace(/\+/g, " "));
	};
	const queryString = location.search.substring(1);
	const keyValues = queryString.split("&");

	keyValues.forEach(product => {
		const key = product.split("=");
		if (key.length > 1) {
			assoc[decode(key[0])] = decode(key[1]);
		}
	});

	return assoc;
}


// For showing / hiding the master password
window.passwordToggle = function () {
	// If the switch is on / to the right / "Hide"
	if (document.getElementById("passwordToggle").checked) {
		// Make the password field use blobs
		document.getElementById("pass").type = "password";
	} else {
		// If it's off
		// Make the password field use actual text so you can see/copy it.
		document.getElementById("pass").type = "text";
	}
};

window.copy = function () {

	const pass = document.getElementById("result").value;

	if (pass === "") {
		M.toast({
			html: "You have no password to copy.",
			displayLength: 4000,
			classes: "warning"
		});
	} else {

		let copyElement = document.createElement("input");
		copyElement.setAttribute("type", "text");
		copyElement.setAttribute("value", pass);
		copyElement = document.body.appendChild(copyElement);
		copyElement.select();
		document.execCommand("copy");
		copyElement.remove();

		M.toast({
			html: "Successfully copied!",
			displayLength: 4000,
			classes: "success"
		});
	}

};

// For showing / hiding the generated password
window.resultToggle = function () {
	// If the switch is on / to the right / "Hide"
	if (document.getElementById("resultToggle").checked) {
		// Make the password field use blobs
		document.getElementById("result").type = "password";
	} else {
		// If it's off
		// Make the password field use actual text so you can see/copy it.
		document.getElementById("result").type = "text";
	}
};

/**
 * A random int between two values
 * @param  {Number} min - Lowest value possible, inclusive
 * @param  {Number} max - Highest value possible, exclusive
 */
window.getRandomArbitrary = function (min, max) {
	return Math.trunc(Math.random() * (max - min) + min);
};

/**
 * @param  {String} passedLang - Changes the language and updates the cookie to match
 */
window.changeLang = function (passedLang) {


	// Invalid language code
	if (!langData[passedLang]) {
		throw new Error(`Invalid language "${passedLang}"`);
	}

	setStored("lang", passedLang);

	// Ensure the correct language is loaded
	const file = passedLang === "en-GB" ? "/" : "/" + passedLang + extension;

	// If not on the chosen page
	if (window.location.pathname !== file) {
		window.location.pathname = file;
	}
};

// Take inputs and display a password. (The black box)
window.process = function () {
	let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // Defualt character set (Set here but overwritten if there's a custom one.)
	const requirements = []; // By default we have no requirements but reset it so we don't carry them over
	let regex; // Blank for the same reason
	let appName = document.getElementById("app").value.trim();
	const masterPass = document.getElementById("pass").value;
	const length = Math.trunc(document.getElementById("length").value); // Get the desired length of a password and make sure it's an integer
	let result = ""; // Has to be here, not in the loop for scope purposes

	if (!(minLength <= length && length <= maxLength)) {
		// if the length is invalid
		if (length > maxLength) {
			// Too long
			document.getElementById("length").value = maxLength;
		} else if (length < minLength) {
			// Too short
			document.getElementById("length").value = minLength;
		} else {
			// Should never be triggered but better safe than sorry
			document.getElementById("length").value = 16;
			throw new Error("This should never happen");
		}

		// Now we have a sensible value, restart the process
		window.process();
		return;
	}

	// If the appname or password or length are empty
	if (appName === "" || masterPass === "" || length === "") {
		// Empty the output field
		document.getElementById("result").value = "";
		// Stop function from generating new password
		return;
	}

	// If there's a preset in use
	if (chosen) {
		// If it's a site with a preset
		console.debug(`Found preset: ${appName}`);

		// If it's an alias for another app
		if (jsonData[appName].alias) {
			// Change the name of the app we're using to its alias
			appName = jsonData[appName].alias;
		}

		// If it has a custom character set
		if ("chars" in jsonData[appName]) {
			// Replace the default character set with the supplied one.
			chars = jsonData[appName].chars;
		}

		// If it has a regex
		if ("regex" in jsonData[appName]) {
			// Set the regex to match
			try {
				regex = new RegExp(jsonData[appName].regex);
			} catch (SyntaxError) {
				throw new Error(`Invalid regex from ${appName} "${jsonData[appName].regex}"`);
			}
		}

		if ("requirements" in jsonData[appName]) {
			for (let i = 0; i < jsonData[appName].requirements.length; i++) {
				requirements.push(
					possibleRequirements[jsonData[appName].requirements[i]]
				);
			}
		}
	}

	console.debug("Started generating password");

	// Set the generation seed
	if (mode === "new") {
		Math.seedrandom(keccak512(appName.toLowerCase() + masterPass));
	} else {
		Math.seedrandom(appName.toLowerCase() + masterPass);
	}

	// password generation cycle
	while (true) {
		result = "";
		while (result.length < length) {
			// Add one seeded random character at a time
			result += chars[Math.floor(Math.random() * chars.length)];
		}

		// If there's requirements to forfill
		if (requirements.length !== 0 || regex) {
			let nope = false;
			for (let j = 0; j < requirements.length; j++) {
				// For each requirement
				for (let c = 0; c < requirements[j].length; c++) {
					// For each character in the requirement group

					// Check all characters
					if (result.indexOf(requirements[j][c]) !== -1) {
						// If that character is in the password
						break;
					}

					// If we're on the last character
					if (
						requirements[j].indexOf(requirements[j][c]) === requirements[j].length - 1
					) {
						nope = true;
						break;
					}
				}

				// If it's already failed a requirement
				if (nope) {
					// Don't bother checking the rest
					break;
				}
			}

			// If there's a regex and we've not already failed
			if (regex && !nope) {
				// See if the generated password fails the regex
				if (!regex.test(result)) {
					console.log(regex.test(result), result);
					nope = true;
				}
			}

			if (!nope) {
				// If all tests passed
				break;
				// Stop making new passwords
			}
		} else {
			// No requirements, including regexes
			break;
		}
	}

	// The password has been generated

	// Display password
	document.getElementById("result").value = result;
};

/**
 * Changes the mode to either
 * @param  {string} setTo - Either "old" or "new", "old" being legacy mode and "new" being suggested mode
 * @returns {void}
 */
window.setMode = function (setTo) {
	mode = setTo;
	setStored("mode", setTo);
	window.process();
};

/**
 * Sets the small logo based off an app name
 * @param  {string} appName
 */
function setLogo (appName) {
	let logo;

	switch (typeof jsonData[appName].mini) {

	case "string":
		logo = jsonData[appName].mini;
		break;

	case "boolean":
		if (jsonData[appName].mini) {
			logo = `logos/${appName}-MINI.svg`;
		} else {
			if (jsonData[appName].logo) {
				logo = jsonData[appName].logo;
			} else {
				logo = `logos/${appName}.svg`;
			}
		}
		break;

	case "undefined":

		if (jsonData[appName].logo) {
			logo = jsonData[appName].logo;
		} else {
			logo = `logos/${appName}.svg`;
		}

		break;

	default:
		throw new Error(`Invalid mini value "${typeof jsonData[appName].mini}" for ${jsonData[appName]} preset`);

	}

	// Set image
	document.getElementById("logoContainer").style.display = "flex";
	document.getElementById("logo").src = logo;
	document.getElementById("logo").alt = appName;
	document.getElementById("logo").title = appName;
}

/**
 * On page load
 */
window.onload = function () {

	// Process langs.json
	for (const key in langData) {

		// Add select option for language
		const option = document.createElement("option");
		option.innerHTML = langData[key].native;
		option.dataset.short = key;

		document.querySelector("#lang").appendChild(option);
	}

	// Convert cookies into localstorage
	const toConvert = ["password", "mode", "theme"];

	for (let i = 0; i < toConvert.length; i++) {
		const cookie = toConvert[i];

		// Get cookie
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${cookie}=`);
		let val;

		if (parts.length === 2) {
			val = parts.pop().split(";").shift();

			// Store in local storage
			setStored(cookie, val);

			// Remove that cookie
			document.cookie = cookie + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
		}
	}

	let usingLang;

	// If the user has a language cookie
	if (getStored("lang") !== null) {

		// Select the correct selection
		document.getElementById("lang").value = langData[getStored("lang")].native;
		usingLang = getStored("lang");
	} else {
		// If no lang cookie exists
		// Check navigator language
		const lang = navigator.language || navigator.userLanguage;
		const first = lang.split("-")[0];
		const matches = Object.keys(langData).filter(x => x.startsWith(first));

		// If there's a translation for the user's language
		if (matches.length !== 0) {
			// Pick it
			document.getElementById("lang").value = langData[matches[0]].native;
			setStored("lang", matches[0]);
			usingLang = matches[0];

		} else {
			// Pick english
			document.getElementById("lang").value = "English";
			setStored("lang", "en-GB");
			usingLang = "en-GB";
		}

	}

	window.changeLang(usingLang);


	// Themes have already been set, now we handle the options
	// Process themes.json
	for (const key in themeData) {

		// Add select option for the theme
		const themeOption = document.createElement("option");
		themeOption.id = key;
		themeOption.innerHTML = key;
		document.querySelector("#theme").appendChild(themeOption);

	}

	// Set the select to chosen theme or vanilla as a backup
	document.getElementById("theme").value = getStored("theme") ? getStored("theme") : defaultTheme;

	// Initialize tooltips
	M.Tooltip.init(document.querySelectorAll(".tooltipped"));
	// Initialize the tabs
	const tabs = M.Tabs.init(document.querySelectorAll(".tabs"))[0];

	// Initialise the side nav
	M.Sidenav.init(document.querySelectorAll(".sidenav"), { edge: "left" })[0];
	window.side = M.Sidenav.getInstance(document.getElementById("slide-out"));
	// Initalise the theme selection
	// Or not since materialize styled select is terrible.
	// select = M.FormSelect.init(document.querySelectorAll("select"))[0];


	// Set the mode cookie if we haven't before
	if (getStored("mode") === null) {
		mode = "new";
	} else {
		mode = getStored("mode");
	}

	tabs.select(mode);

	// If user hasn't opted out of storing passwords
	if (getStored("store") !== "false") {

		// If there's a stored password
		if (getStored("password")) {
			// Fill the password input with the correct password
			document.getElementById("pass").value = getStored("password");
			// Raise the text on the input
			document.querySelector("label[for='pass']").classList.add("active");
		}

		// Toggle session switch
		document.getElementById("session-toggle").click();
	}

	// Process the sites.json for the autocomplete structure
	for (const key in jsonData) {
		// If the preset has a custom logo url
		if (jsonData[key].logo) {
			autoCompleteData[key] = jsonData[key].logo;
		} else {
			// Set the logo url to the default
			autoCompleteData[key] = `logos/${key}.svg`;
		}
	}

	// Setup possible autocomplete sites
	M.Autocomplete.init(document.getElementById("app"), {
		data: autoCompleteData,

		// called when an autocomplete is used.
		onAutocomplete (val) {

			// Set image
			setLogo(val);
			let length = targetLength;

			// If it's an alias for another app
			if (jsonData[val].alias) {
				// Change the name of the app we're using to its alias
				val = jsonData[val].alias;
				console.debug(`Using alias: ${val}`);
			}

			if (jsonData[val].minLength) {
				minLength = jsonData[val].minLength;
			} else {
				minLength = defaultMinLength;
			}
			document.getElementById("length").min = minLength;

			if (jsonData[val].maxLength) {
				maxLength = jsonData[val].maxLength;
			} else {
				maxLength = defaultMaxLength;
			}

			document.getElementById("length").max = maxLength;

			if (!(minLength <= length && length <= maxLength)) {
				length = maxLength;
			}

			document.getElementById("length").max = maxLength;

			// Set chosen var
			chosen = val;

			// In case there's already a password (eg switching sites / presets) regen password
			window.process();
		},
		// Minimum number of characters typed for the dialog to open
		minLength: 0,
		// For deciding the order of options.
		sortFunction (a, b, inputString) {
			// inputString will always be in both a and b if present

			// if there's a given inputString
			if (inputString) {
				// If only "a" starts with inputString
				if (a.startsWith(inputString) && !b.startsWith(inputString)) {
					return -1;
				}

				// If only "b" starts with inputString
				if (!a.startsWith(inputString) && b.startsWith(inputString)) {
					return 1;
				}
				// If both "a" and "b" start with inputString we do the same as always so
			}

			if (a < b) {
				return -1;
			}
			// No need for else if as if the prior condition was true, we'd return so wouldn't run this line
			if (a > b) {
				return 1;
			}
			// a must be equal to b
			return 0;
		}
	});

	// TODO Scroll to selected

	// const auto = this.document.getElementById("app");


	// const old = auto.onkeydown;
	// console.log(old);
	// auto.onkeydown = function (t) {

	// 	const selected = document.querySelector(".autocomplete-content.dropdown-content .active");
	// 	// console.log(selected.children[1].innerText);

	// 	// old(t);

	// 	// selected = document.querySelector(".autocomplete-content.dropdown-content .active");
	// 	selected.scrollIntoView();

	// 	// console.log(selected);
	// 	console.log(selected.children[1].innerText);

	// 	// document.querySelector(".autocomplete-content.dropdown-content").scrollTo(selected.x, selected.y);
	// };

	// console.log(document.getElementById("app").M_Autocomplete._handleInputKeydown);


	// Autocomplete has been setup
	// Move the cursor to the app field
	document.getElementById("app").focus();
	document.querySelector("label[for='app']").classList.add("active");

	const qs = getQueryStrings();

	// If an app has been passed by query string
	if (qs.app) {
		const appName = String(qs.app);

		// Set the app name
		document.getElementById("app").value = appName;

		// If it's a preset
		if (jsonData[appName]) {
			// Click into the app field to open the dropdown
			document.getElementById("app").click();
			// Click the first result
			document.querySelector(".autocomplete-content.dropdown-content :first-child").click();
		}

		// In case there's already a password
		window.process();

		// Move the cursor to the app field
		document.getElementById("pass").focus();
		document.querySelector("label[for='pass']").classList.add("active");
	}

	checkDebug();
};


/**
 * Use the current password as a seed to colour the underline of the field
 */
function colourUnderline () {
	// If there's a password
	if (document.getElementById("pass").value) {
		// Seed the
		Math.seedrandom(document.getElementById("pass").value);
		const colour = `HSL(${window.getRandomArbitrary(0, 360)}, ${window.getRandomArbitrary(
			60,
			100
		)}%, ${window.getRandomArbitrary(45, 80)}%)`;
		document
			.getElementById("pass")
			.style.setProperty("--underlineColor", colour);
	} else {
		// If there's no password, reset the underline colour
		document.getElementById("pass").removeAttribute("style");
	}
}


window.appInput = function () {
	// Clear logo
	document.getElementById("logoContainer").style.display = "none";
	document.getElementById("logo").removeAttribute("src");
	document.getElementById("logo").removeAttribute("alt");
	document.getElementById("logo").removeAttribute("title");

	// Reset the mins and maxes for length
	minLength = defaultMinLength;
	maxLength = defaultMaxLength;
	document.getElementById("length").max = maxLength;
	document.getElementById("length").min = minLength;

	document.getElementById("length").value = targetLength;

	window.process();
};

window.passwordUp = function () {
	colourUnderline();

	// If the user is opted into saving the master password
	if (getStored("store") === "true") {

		// If there's a password
		if (document.getElementById("pass").value) {
			// Store it
			setStored("password", document.getElementById("pass").value);
		} else {
			// Otherwise, delete the value
			localStorage.removeItem("password");
		}
	}

	// Regen the password
	window.process();
};

window.addEventListener("beforeinstallprompt", e => {
	window.installPromptEvent = e;
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Show the prompt on later versions
});

window.appDown = function (e) {

	// Everytime the user types, it invalidates the preset
	chosen = false;

	// Enter pressed and dropdown visible
	if (
		(e.key === "Enter" || e.code === "Enter" || e.keyCode === 13) &&
		document.querySelector(".autocomplete-content.dropdown-content").offsetHeight > 0
	) {

		// If no entry is selected
		if (document.querySelector(".autocomplete-content.dropdown-content .active") === null) {
			// Click the first preset
			document.querySelector(".autocomplete-content.dropdown-content :first-child").click();
		}

	}

};

// For disabling/enabling password saving
window.sessionToggle = function () {
	// If the switch is on / to the right
	if (document.getElementById("session-toggle").checked) {

		// Set session cookie cookie
		setStored("store", true);

		// If there's a password
		if (document.getElementById("pass").value) {
			// Store it
			setStored("password", document.getElementById("pass").value);
		} else {
			// Otherwise, delete the value
			localStorage.removeItem("password");
		}


	} else {
		// Stop saving password
		setStored("store", false);
		// Delete any exist stored password
		localStorage.removeItem("password");
	}
};

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

Math.seedrandom = require("seedrandom");
const cloverleaf = require("cloverleaf");

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject (item) {
	return (item && typeof item === "object" && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep (target, ...sources) {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
}

const jsonData = mergeDeep(require("../data/logos.json"), cloverleaf.siteData);
const themeData = require("../data/themes.json");
const langData = require("../langs/langs.json");
const autoCompleteData = {}; // Here for scope purposes
const defaultMinLength = 4; // We
const defaultMaxLength = 512; // All
let minLength = defaultMinLength; // Are,
let maxLength = defaultMaxLength; // Really
const defaultTheme = "Vanilla";
const extension = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? ".html" : ""; // Fix links if running locally
let mode;
let targetLength = 16;
// let select; // Theme selector
let presetInUse = false; // Flag true if a preset is selected
let installPromptEvent;

window.generate = function () {
	document.getElementById("result").value =
	cloverleaf.process(
		document.getElementById("app").value.trim(),
		document.getElementById("pass").value,
		Math.trunc(document.getElementById("length").value),
		presetInUse,
		mode
	);
};

/**
 * @param  {String} passedTheme - Changes the theme and updates the cookie to match
 */
window.changeTheme = function (passedTheme) {

	// Invalid theme
	if (!themeData[passedTheme]) {
		console.error(`Invalid theme "${passedTheme}", defaulting to ${defaultTheme}`);
		passedTheme = defaultTheme;
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

};

// Change theme to stored before the page loads to avoid flicker.
window.changeTheme(getStored("theme") ? getStored("theme") : defaultTheme);


/**
 * Gets a cookie
 * @param  {string} name - The name of the cookie to retrieve
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
	if (window.location.pathname.toLowerCase() !== file.toLowerCase() ) {
		window.location.pathname = file;
	}
};

/**
 * Changes the mode to either
 * @param  {string} setTo - Either "insecure" or "new", "insecure" being legacy mode and "new" being suggested mode
 * @returns {void}
 */
window.setMode = function (setTo) {
	mode = setTo;
	setStored("mode", setTo);
	window.generate();
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

window.fixLength = function () {
	const length = document.getElementById("length").value;

	if (!(minLength <= length && length <= maxLength)) {
		// if the length is invalid
		if (length > maxLength) {
			// Too long
			document.getElementById("length").value = maxLength;
		} else if (length < minLength) {
			// Too short
			document.getElementById("length").value = minLength;
		}
	}
};

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


	if (getStored("length")) {

		targetLength = getStored("length");

		document.getElementById("length-pref").value = targetLength;
		document.getElementById("length").value = targetLength;
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

			window.fixLength();

			// Set chosen var
			presetInUse = true;

			// In case there's already a password (eg switching sites / presets) regen password
			window.generate();
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
		window.generate();

		// Move the cursor to the app field
		document.getElementById("pass").focus();
		document.querySelector("label[for='pass']").classList.add("active");
	}

	// Setup copy shortcut
	document.body.addEventListener("keydown", e => {

		// If Ctrl + C is pressed
		if (e.ctrlKey && e.code === "KeyC") {

			// If the user isn't selecting anything
			if (window.getSelection().toString() === "") {
				// Run existing copy command
				window.copy();
			}
		}
	});

	// Dev studd
	switch (location.hostname) {

	// If the user is on the dev build
	case "dev.cloverleaf.app":

		// Change title
		document.title += " - Dev Build";

		// Change favicon
		var ico = document.createElement("link");
		ico.rel = "shortcut icon";
		ico.href = "dev.ico";
		document.head.appendChild(ico);
		break;

	case "cloverleaf.app":
		break;

	default:
		document.title += " - localhost";
		break;
	}

	if (process.env.NODE_ENV === "development") require("./debug");

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
			.style.setProperty("--accentColor", colour);
	} else {
		// If there's no password, reset the underline colour
		document.getElementById("pass").removeAttribute("style");
	}
}


window.appInput = function () {

	// Everytime the user types, it invalidates the preset
	presetInUse = false;

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

	window.generate();
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
	window.generate();
};

window.addEventListener("beforeinstallprompt", e => {

	installPromptEvent = e;
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();

	// Show install button
	document.getElementById("install").style = "";

	// Alert the user that the app can be installed.
	M.toast({
		html: "Web app ready to install.",
		displayLength: 4000,
		classes: "success"
	});
});

window.appDown = function (e) {

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

window.getVar = function (varName) {
	return eval(varName);
};

window.lengthPref = function (passedLength) {

	if (!(defaultMinLength <= passedLength && passedLength <= defaultMaxLength)) {
		// if the length is invalid
		if (passedLength > defaultMaxLength) {
			// Too long
			passedLength = defaultMaxLength;
		} else if (passedLength < defaultMinLength) {
			// Too short
			passedLength = defaultMinLength;
		}

		document.getElementById("length-pref").value = passedLength;
	}

	targetLength = passedLength;
	setStored("length", passedLength);

	document.getElementById("length").value = passedLength;
	window.generate();
};

window.presetScroll = function () {
	const selected = document.querySelector(".autocomplete-content.dropdown-content .active");
	if (selected)	selected.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
};

window.install = function () {

	try {
		installPromptEvent.prompt();
	} catch (TypeError) {
		M.toast({
			html: "Failed to install app.",
			displayLength: 4000,
			classes: "warning"
		});
	}

};
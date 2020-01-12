/* global M */

// Importing materialize partially is broken (See https://github.com/Dogfalo/materialize/issues/5958)
// import "materialize-css/js/cash.js";
// import "materialize-css/js/component.js";
// import "materialize-css/js/global.js";
// import "materialize-css/js/tooltip.js";
// import "materialize-css/js/forms.js"
// import "materialize-css/js/autocomplete.js";

import "./style.scss";

require("materialize-css/dist/js/materialize.min.js");
import {keccak512} from "js-sha3";
Math.seedrandom = require("seedrandom");


const jsonData = require("../data/sites.json");
const themeData = require("../data/themes.json");
const autoCompleteData = {}; // Here for scope perposes
const defaultMinLength = 4; // We
const defaultMaxLength = 512; // All
let minLength = defaultMinLength; // Are,
let maxLength = defaultMaxLength; // Really
const defaultTheme = "Vanilla";
const debugMode = false;
let mode;
const cookieCrumble = 604800; // 7 days * 24 hours * 60 mins * 60 seconds = 604800
const possibleRequirements = {
	cap: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	low: "abcdefghijklmnopqrstuvwxyz",
	num: "0123456789",
	special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};
const targetLength = 16;
let select; // Theme selector
window.doSessionCookie = true;

/**
 * Gets a cookie
 * @param  {string} name - The name of the cookie to retrive
 * @returns {(string|undefined)} - Value of the cookie | If there is no cookie, undefined
 */
function getCookie(name) {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	}
	return undefined;
}

/**
 * Sets a cookie to a certain value
 * @param  {string} name - The name of the cookie to set
 * @param  {string} value -  The value to set that cookie to
 * @returns {void}
 */
window.setCookie = function(name, value) {
	document.cookie = `${name}=${value}; max-age=${cookieCrumble}; path=/;`; // Set cookie to expire in 1 week
}

function checkDebug() {
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

	// If I'm testing, change the page title so I can tell the tabs apart
	if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
		document.title += " - LocalHost";

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

function getQueryStrings() {
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
}

/**
 * @param  {String} passedTheme - Changes the theme and updates the cookie to match
 */
window.changeTheme = function (passedTheme) {
	let usedTheme = passedTheme;
	if (passedTheme === "") {
		usedTheme = defaultTheme;
	} else if (!themeData[passedTheme]) {
		throw new Error(`Invalid theme  "${passedTheme}" `);
	} else {
		window.setCookie("theme", usedTheme);

		document.documentElement.style.setProperty("--accentColor", themeData[usedTheme].accent);
		document.documentElement.style.setProperty("--lightAccent", themeData[usedTheme].lightAccent);
		document.documentElement.style.setProperty("--textColor", themeData[usedTheme].text);
		document.documentElement.style.setProperty("--backgroundColor", themeData[usedTheme].background);
		document.documentElement.style.setProperty("--internalColor", themeData[usedTheme].internal);
		document.documentElement.style.setProperty("--incorrectColor", themeData[usedTheme].incorrect);
		document.documentElement.style.setProperty("--correctColor", themeData[usedTheme].correct);
		document.documentElement.style.setProperty("--inputColor", themeData[usedTheme].inputColor);
		document.documentElement.style.setProperty("--linkColor", themeData[usedTheme].linkColor);
		document.documentElement.style.setProperty("--highlightColor", themeData[usedTheme].highlightColor);
		document.documentElement.style.setProperty("--underlineColor", themeData[usedTheme].underlineColor);
	}
}

// Take inputs and display a password. (The black box)
window.process = function() {
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

	// It's a valid attempt, continue

	if (jsonData[appName]) {
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
					if (result.indexOf(requirements[j][c]) !== -1) {
						// If that character is in the password
						break;
					}
					if (
						requirements[j].indexOf(requirements[j][c]) === requirements[j].length - 1
					) {
						nope = true;
						break;
					}
				}
			}

			// If there's a regex
			if (regex) {
				// See if the generated password fails the regex
				if (!regex.test(result)) {
					console.log(regex.test(result), result);
					nope = true;
				}
			}

			if (!nope) {
				// If all tests passed
				break;
			}
		} else {
			// No requirements, including regexes
			break;
		}
	}

	// The password has been generated

	// Display password
	document.getElementById("result").value = result;
}

/**
 * Changes the mode to either
 * @param  {string} setTo - Either "old" or "new", "old" being legacy mode and "new" being suggested mode
 * @returns {void}
 */
window.setMode = function (setTo) {
	mode = setTo;
	window.setCookie("mode", setTo);
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

	// Process the themes.json
	for (const key in themeData) {

		// Add select option for the theme
		const themeOption = document.createElement("option");
		themeOption.onclick = `changeTheme("${key}")`;
		themeOption.id = key;
		themeOption.innerHTML = key;
		document.querySelector("#options .input-field select").appendChild(themeOption);

		const css = `a[id=${key}]{background-color: ${
			themeData[key].background
		} !important; border: 1px ;}a[id=${key}] i {color: ${themeData[key].text}`;
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

	// If the user has a prefered theme
	if (getCookie("theme") !== undefined) {
		console.debug(`Found a prefered theme. Loading ${getCookie("theme")}`);

		window.changeTheme(getCookie("theme"));
		// Select the correct selection
		document.getElementById("themeSelector").value = getCookie("theme");
	} else {
		// If no theme cookie exists
		// Click the vanilla theme.
		window.changeTheme(defaultTheme);
		document.getElementById("themeSelector").value = defaultTheme;
	}


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
	if (getCookie("mode") === undefined) {
		mode = "new";
	} else {
		mode = getCookie("mode");
	}

	tabs.select(mode);

	// Get saved password
	if (getCookie("password")) {
		document.getElementById("pass").value = getCookie("password"); // Fill the password input with the correct password
		document.querySelector("label[for='pass']").classList.add("active"); // Raise the text on the input
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
		onAutocomplete(val) {
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

			// In case there's already a password (eg switching sites / presets) regen password
			window.process();
		},
		// Minimum number of characters typed for the dialog to open
		minLength: 0,
		// For deciding the order of options.
		sortFunction(a, b, inputString) {
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

	if (qs.app) {
		const appName = String(qs.app);

		// Set the app name
		document.getElementById("app").value = appName;

		// If it's a preset
		if (jsonData[appName]) {
			// Press enter to select the preset
			document.getElementById("app").click();
			document.querySelector(".autocomplete-content.dropdown-content :first-child").click();
		}

		// In case there's already a password
		window.process();

		// Move the cursor to the app field
		document.getElementById("pass").focus();
		document.querySelector("label[for='pass']").classList.add("active");
	}


	// If the cookie tray hasn't been hidden and the user has cookies enabled
	if (getCookie("cookieHidden") === undefined && navigator.cookieEnabled) {
		document.getElementById("cookieAlert").style.display = "block";
	}

	checkDebug();
};


/**
 * Use the current password as a seed to colour the underline of the field
 */
function colourUnderline() {
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


window.appInput = function (e) {
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

	// Keep master password while this browser session's open
	if (window.doSessionCookie) {
		document.cookie = "password=" + (
			// If there's a password
			document.getElementById("pass").value ?
				// Store it
				document.getElementById("pass").value:
				// Otherwise, delete the cookie
				"; Max-Age=0"
		);
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

	// Enter pressed and dropdown visible
	if (
		(e.key === "Enter" || e.code === "Enter" || e.keyCode === 13) &&
		document.querySelector(".autocomplete-content.dropdown-content").offsetHeight > 0
	) {

		// If no entry is selected
		if (document.querySelector(".autocomplete-content.dropdown-content .active") === null) {
			document.querySelector(".autocomplete-content.dropdown-content :first-child").click();
		}

	}

};


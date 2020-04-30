const themeData = require("../data/themes.json");

const debug = false;

if (debug) {

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
		"highlightColor": "#ff00ff"
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

}
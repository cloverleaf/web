var autoCompleteData = {}; // Here for scope perposes
var jsonData = {}; // As am I.
var defaultMinLength = 1; // We
var defaultMaxLength = 512; // All
var minLength = defaultMinLength; // Are,
var maxLength = defaultMaxLength; // Really
var defaultTheme = "Vanilla";
var themeData = {};
var debugMode = false;
var engineVersion = "6.0.0"; // Changed if breaking changes are made to the engine
var mode;
var d = new Date();
var cookieCrumble = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate()); // Make a date 1 year into THE FUTURE
var possibleRequirements = {
  "cap":"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "low":"abcdefghijklmnopqrstuvwxyz",
  "num":"0123456789",
  "special":"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
};

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {return parts.pop().split(";").shift();}
}

function setCookie(name, value) {
  document.cookie = name+"="+value+"; expires=" + cookieCrumble.toGMTString() + "; path=/;"; // Set cookie to expire in 1 year
}

function setMode(setTo){
  mode = setTo;
  setCookie("mode", setTo);
  process();
}

function toggleSettings(){
  // Show the selector div
  var engineSelector = document.getElementById("engineSelector");
  engineSelector.style.display = engineSelector.style.display == "none" ? "block" : "none";
  // Click on the last used mode
  M.Tabs.getInstance(document.getElementById("engineTabs")).select(mode);

  // If engineSelector is visable
  if (engineSelector.offsetParent !== null) {
    setCookie("showSettings", "true");
  } else {
    document.cookie = "showSettings=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Delete the showSettings cookie
  }
}

function checkDebug(){
  if (debugMode) {
    document.title = "Perdola - Debug " + new Date().getTime();
    debug("Enabling debug css");
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'debug.css');
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}

function debug(text) {
  if (debugMode) {
    console.log(text);
  }
}

function getQueryStrings() {
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1);
  var keyValues = queryString.split("&");

  keyValues.forEach((product) => {
    var key = product.split("=");
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  });

  return assoc;
}

// For showing / hiding the master password
function passwordToggle() {
  // If the switch is on / to the right / "Hide"
  if (document.getElementById("passwordToggle").checked) {
    // Make the password field use blobs
    document.getElementById("pass").type = "password";
  } else { // If it's off
    // Make the password field use actual text so you can see/copy it.
    document.getElementById("pass").type = "text";

  }
}

// For showing / hiding the generated password
function resultToggle() {
  // If the switch is on / to the right / "Hide"
  if (document.getElementById("resultToggle").checked) {
    // Make the password field use blobs
    document.getElementById("result").classList.add("hidden");
  } else { // If it's off
    // Make the password field use actual text so you can see/copy it.
    document.getElementById("result").classList.remove("hidden");
  }
}

function getRandomArbitrary(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function changeTheme(passedTheme) {

  if (passedTheme === "") {
    passedTheme = defaultTheme;
  } else if (!themeData[passedTheme]) {
    throw new Error( 'Invalid theme  "'+ passedTheme +'" ');
  } else {

    setCookie("theme", passedTheme);

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

  }
}

// Take inputs and display a password. (The black box)
function process() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // Defualt character set (Set here but overwritten if there's a custom one.)
  var requirements = []; // By default we have no requirements but reset it so we don't carry them over
  var appName = document.getElementById("app").value;
  var masterPass = document.getElementById("pass").value;
  var length = Math.trunc(document.getElementById("length").value); // Get the desired length of a password and make sure it's an integer
  var result = ""; // Has to be here, not in the loop for scope purposes
  var minLength = defaultMinLength;

  if (! ( minLength <= length && length <= maxLength ) ) { // if the length is invalid

    if ( length > maxLength ) { //Too long
      document.getElementById("length").value = maxLength;
    } else if (length < minLength) { // Too short
      document.getElementById("length").value = minLength;
    } else { // Should never be triggered but better safe than sorry
      document.getElementById("length").value = 16;
    }

    // Now we have a sensible value, restart the process
    process();
    return;
  }

  // If the appname or password or length are empty
  if (appName === ""|| masterPass === "" || length === "") {
    // Empty the output field
    document.getElementById("result").innerHTML = "";
    // Stop function from generating new password
    return "App / pass empty";
  }

  //It's a valid attempt, continue

  if (jsonData[appName]) { // If it's a site with a preset

    debug("Found preset: "+appName);

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

    if ("requirements" in jsonData[appName]) {
      for (var i = 0; i < jsonData[appName].requirements.length; i++) {
        requirements.push(possibleRequirements[jsonData[appName].requirements[i]]);
      }
    }

    if ("minLength" in jsonData[appName]) {
      minLength = jsonData[appName].minLength;
    }

  }

  debug("Started generating password");

  // Set the generation seed
  if (mode == "new") {
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
    if (requirements != []) {
      var nope = false;
      for (var j = 0; j < requirements.length; j++) { // For each requirement

        for (var c = 0; c < requirements[j].length; c++) { // For each character in the requirement group

          if (result.indexOf(requirements[j][c]) != -1) { // If that character is in the password
            break;
          }
          if (requirements[j].indexOf(requirements[j][c]) == requirements[j].length-1) {
            nope = true;
            break;
          }
        }
      }

      if (!nope) { // If all tests passed
        break;
      }

    }  else { // no requirements
      break;
    }
  }

  // The password has been generated

  // Display password
  document.getElementById("result").textContent = result;
}

// on application name change
function updateLimits() {
  var appName = document.getElementById("app").value;

  // We assume there's no preset
  document.getElementById("length").min = defaultMinLength;
  document.getElementById("length").max = defaultMaxLength;
  minLength = defaultMinLength;
  maxLength = defaultMaxLength;

  // If there's a preset then we overwrite the defualts
  if (jsonData[appName]) {

    // If it's an alias for another app
    if (jsonData[appName].alias && jsonData[jsonData[appName].alias]) {
      // Change the name of the app we're using to its alias
      appName = jsonData[appName].alias;
    } else if (jsonData[appName].alias && !jsonData[jsonData[appName].alias]) {
      throw "Invalid alias";
    }

    // And that preset has a minLength
    if ("minLength" in jsonData[appName]) {

      // Only update if it's actually a different number.
      if (jsonData[appName].minLength != minLength) {
        // Update global var
        minLength = jsonData[appName].minLength;
        // Also set the length input so it can't go under the limit
        document.getElementById("length").min = minLength;
      }
    }

    if ("maxLength" in jsonData[appName]) {
      // Only update if it's actually a different number.
      if (jsonData[appName].maxLength != maxLength) {
        // Update global var
        maxLength = jsonData[appName].maxLength;
        // Also set the length input so it can't go under the limit
        document.getElementById("length").max = maxLength;
      }
    }
  }
}

// On page load
window.onload = function() {


  if (getCookie("cookieHidden") !== undefined) {
    document.getElementById("cookieAlert").style.display = "none";
  }

  updateLimits();

  // Process the sites.json for the autocomplete structure
  var sites = new XMLHttpRequest()
  sites.onload = function() {

    jsonData = JSON.parse(sites.response);

    var qs = getQueryStrings();

    if (qs.app) {
      var appName = String(qs.app);
      // If it's a preset
      if (jsonData[appName]) {


        var length = 16;
        var max = jsonData[appName].maxLength;

        if (!max) {
          max = defaultMaxLength;
        }

        if (!(jsonData[appName].minLength <= length && length <= max)) {
          length = max;
        }

        document.getElementById("length").value = length;

        // In case there's already a password (eg switching sites / presets) regen password
        process();


        if (jsonData[appName].logo) {
          logo = jsonData[appName].logo;
        } else {
          logo = "logos/"+appName+".svg";
        }


        // Set image
        document.querySelector("#logoContainer").style.display = "flex";
        document.querySelector("img#logo").src = "logo";
        document.querySelector("img#logo").alt = "appName";
        document.querySelector("img#logo").title = "appName";
      }
      // Set the app name
      document.getElementById("app").value = appName;

      document.querySelector("label[for='app']").classList.add("active");
    }


    for (var key in jsonData) {
      // If the preset has a custom logo url
      if (jsonData[key].logo) {
      autoCompleteData[key] = jsonData[key].logo;
      } else {
      // Set the logo url to the default
      autoCompleteData[key] = "logos/"+key+".svg";
      }
  }

    // Setup possible autocomplete sites
    M.Autocomplete.init(document.getElementById("app"), {
      data: autoCompleteData,

      // called when an autocomplete is used.
      onAutocomplete: function(val) {

        // Set image
        document.querySelector("#logoContainer").style.display = "flex";
        document.querySelector("img#logo").src = autoCompleteData[val];
        document.querySelector("img#logo").alt = val;
        document.querySelector("img#logo").title = val;

        // If it's an alias for another app
        if (jsonData[val].alias) {
          // Change the name of the app we're using to its alias
          val = jsonData[val].alias;
          debug("Using alias: "+val);
        }

        var length = 16;
        var max = jsonData[val].maxLength;

        if (!max) {
          max = defaultMaxLength;
        }

        if (!(jsonData[val].minLength <= length && length <= max)) {
          length = max;
        }

        document.querySelector("label[for=length]").classList.add("active");
        document.getElementById("length").value = length;

        // In case there's already a password (eg switching sites / presets) regen password
        process();
      },
      // Minimum number of characters typed for the dialog to open
      minLength: 0,
      // For deciding the order of options.
      sortFunction: function(a, b, inputString) {
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

  };
  sites.open("get", "data/sites.json", true);
  sites.send();

  // Process the sites.json for the autocomplete structure
  var themes = new XMLHttpRequest()
  themes.onload = function() {
    themeData = JSON.parse(themes.response);

    for (var key in themeData) {
      var themeRadio = document.createElement("li")
      themeRadio.innerHTML = "<a class='btn-floating' onclick='changeTheme(\""+key+"\");' id='"+key+"' ><i class='material-icons'>color_lens</i></a>";
      document.getElementById("fabs").appendChild(themeRadio);

      var css = "a[id="+key+"]{background-color: "+themeData[key].background+" !important; border: 1px ;}a[id="+key+"] i {color: "+themeData[key].text;
      var style = document.createElement('style');
      style.type = 'text/css';
      if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.getElementsByTagName("head")[0].appendChild(style);
    };

    // If the user has a prefered theme
    if (getCookie("theme") !== undefined) {
      debug("Found a prefered theme. Loading " + getCookie("theme"));
      changeTheme(getCookie("theme"));
      // Use the clicked CSS for the button
      document.getElementById(getCookie("theme")).checked = true;
    } else { // If no theme cookie exists
      // Click the vanilla theme.
      document.getElementById("Vanilla").checked = true;
      changeTheme(defaultTheme);
    }

    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
      direction: "left", // Direction menu comes out
      hoverEnabled: false, // Hover disabled
      toolbarEnabled: false // Toolbar transition disabled
    });

  };

  themes.open("get", "data/themes.json", true);
  themes.send();


  // Initialize the copy button
  var clipboard = new Clipboard("#copy");

  clipboard.on("success", function(e) {

    if (e.text === "") {
      M.toast({html:"You have no password to copy.", displayLength:4000, classes:"warning"});
    } else {
      M.toast({html:"Successfully copied!", displayLength:4000, classes:"success"});
    }

  });

  checkDebug();

  //Set the engine version cookie if we haven't before
  if (getCookie("engineVersion") === undefined) {
    setCookie("engineVersion", engineVersion);
  }

  //Set the mode cookie if we haven't before
  if (getCookie("mode") === undefined) {
    if (getCookie("engineVersion") != "5.10.0") {
      mode = "new";
    } else {
      mode = "old";
    }
    setCookie("mode", mode);
  } else {
    mode = getCookie("mode");
  }

  // Initialize tooltips
  M.Tooltip.init(document.querySelectorAll(".tooltipped"))
  // Initialize the tabs
  M.Tabs.init(document.querySelectorAll(".tabs"))
  var tabs = M.Tabs.getInstance(document.getElementById("engineTabs"));

  if (getCookie("showSettings") == "true") {
    document.getElementById("engineSelector").style.display = "block";
  }


  if (mode == "new" || mode == "old") {
    tabs.select(mode);
  } else {
    throw new Error( 'Invalid mode  "'+ mode +'" '); // Using the inferior kind of quotes so I may see the superior ones apon error
  }

};

function save() { // Save the current master password as a cookie

  if (document.getElementById("pass").value) { // If there's a password
    setCookie("password", document.getElementById("pass").value);
    M.toast({html:"Password saved to your device!", displayLength:4000, classes:"success"});
  }

}

function load() { // Load the saved password from cookie
  if (getCookie("password") !== undefined) {
    var password = getCookie("password"); // Get the password from the cookie
    document.querySelector("label[for='pass']").classList.add("active") // Raise the text on the input
    document.getElementById("pass").value = password; // Fill the password input with the correct password
    process();
    M.toast({html:"Password loaded from your device!", displayLength:4000, classes:"success"});
  } else {
    M.toast({html:"You have no saved password to load.", displayLength:4000, classes:"warning"});
  }

  Math.seedrandom(password);
  document.getElementById("pass").style = "--underlineColor: HSL(" + getRandomArbitrary(0, 360) + ", " + getRandomArbitrary(60, 100) + "%, " + getRandomArbitrary(45, 80) + "%)";
}

function appUp(e){

  // Pressed a printable character
  if (e.key && e.key.length === 1) {
    // Clear logo
    document.getElementById("logoContainer").style.display = "none";
    document.getElementById("logo").removeAttribute("src");
    document.getElementById("logo").removeAttribute("alt");
    document.getElementById("logo").removeAttribute("title");

    process();

  }
}

function passwordUp(){

  // If there's a password
  if (document.getElementById("pass").value) {
    Math.seedrandom(document.getElementById("pass").value);
    document.getElementById("pass").style.underlineColor = "HSL(" + getRandomArbitrary(0, 360) + ", " + getRandomArbitrary(60, 100) + "%, " + getRandomArbitrary(45, 80) + "%)";
  } else {
    document.getElementById("pass").removeAttribute("style");
  }

  // Regen the password
  process();

}
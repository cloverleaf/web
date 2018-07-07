var lastName = ""; // Name of last application
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
var instance;
var d = new Date();
var cookieCrumble = new Date(d.getFullYear() + 10, d.getMonth(), d.getDate()); // Make a date 10 years into THE FUTURE
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

  document.cookie = name+"="+value+"; expires=" + cookieCrumble.toGMTString() + "; path=/;"; // Set cookie to expire in 10 years
}

function setMode(setTo){
  mode = setTo;
  setCookie("mode", setTo);
  process();
}

function toggleSettings(){
  // Show the selector div
  $("#engineSelector").toggle();
  // Click on the last used mode
  M.Tabs.getInstance($(".tabs")).select(mode);

  if ($("#engineSelector").is(":visible")) {
    setCookie("showSettings", "true");
  } else {
    document.cookie = "showSettings=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Delete the showSettings cookie
  }
}

function checkDebug(){
  if (debugMode) {
    document.title = "Perdola - Debug " + new Date().getTime();
    debug("Enabling debug css");
    $("<link>").attr("rel","stylesheet")
      .attr("type","text/css")
      .attr("href","debug.css")
      .appendTo("head");
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

  for (var i = 0; i<keyValues.length; i++) {
    var key = keyValues[i].split("=");
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  }

  return assoc;
}

// For showing / hiding the master password
function passwordToggle() {
  // If the switch is on / to the right / "Hide"
  if ($("#passwordToggle").prop("checked")) {
    // Make the password field use blobs
    $("#pass").attr("type", "password");
  } else { // If it's off
    // Make the password field use actual text so you can see/copy it.
    $("#pass").attr("type", "text");
  }
}

// For showing / hiding the generated password
function resultToggle() {
  // If the switch is on / to the right / "Hide"
  if ($("#resultToggle").prop("checked")) {
    // Make the password field use blobs
    $("#result").addClass("hidden");
  } else { // If it's off
    // Make the password field use actual text so you can see/copy it.
    $("#result").removeClass("hidden");
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

// Take inputs and display a password. (The  box)
function process() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // Defualt character set (Set here but overwritten if there's a custom one.)
  var requirements = []; // By default we have no requirements but reset it so we don't carry them over
  var appName = $("#app").val();
  var masterPass = $("#pass").val();
  var length = Math.trunc($("#length").val()); // Get the desired length of a password and make sure it's an integer
  var result = ""; // Has to be here, not in the loop for scope purposes
  var minLength = defaultMinLength;

  if (! ( minLength <= length && length <= maxLength ) ) { // if the length is invalid
    $("#result").text("");

    if ( length > maxLength ) { //Too long
      $("#length").val(maxLength);
    }

    return;
  }

  // If the appname or password or length are empty
  if (appName === ""|| masterPass === "" || length === "") {
    // Empty the output field
    $("#result").text("");
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
  $("#result").text(result);
}

// on application name change
function updateLimits() {
  var appName = $("#app").val();

  // We assume there's no preset
  reBindMouse(defaultMinLength, defaultMaxLength);
  $("#length").attr("min", defaultMinLength);
  $("#length").attr("max", defaultMaxLength);
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
        $("#length").attr("min", minLength);
        reBindMouse(minLength);
      }
    }

    if ("maxLength" in jsonData[appName]) {
      // Only update if it's actually a different number.
      if (jsonData[appName].maxLength != maxLength) {
        // Update global var
        maxLength = jsonData[appName].maxLength;
        // Also set the length input so it can't go under the limit
        $("#length").attr("max", maxLength);
        reBindMouse(minLength, maxLength);
      }
    }
  }
}

function reBindMouse(min, max) {

  if (typeof min === "undefined") {
    min = defaultMinLength;
  }

  if (typeof max === "undefined") {
    max = defaultMaxLength;
  }

  // Unbind the current on function
  $("#length").unbind("mousewheel");
  // Update the mousewheel length input bind to keep <= the new limit
  $("#length").on("mousewheel", function(event, delta) {
    if (delta > 0) {
      // Scrolling up
      if (parseInt(this.value) < max) {

        if (parseInt(this.value) < min) {
          this.value = min;
        } else {
          this.value = parseInt(this.value) + 1;
        }


        // Update password
        process();
      }
    } else {
      // Scrolling down
      if (parseInt(this.value) > min) {
        if (parseInt(this.value) > max) {
          this.value = max;
        } else {
          this.value = parseInt(this.value) - 1;
        }

        // Update password
        process();
      }
    }
    return false;
  }, {passive:true});
}

// On page load
$(function() {


  if (getCookie("cookieHidden") !== undefined) {
    $("#cookieAlert").hide();
  }

  updateLimits();
  reBindMouse();

  // Process the sites.json for the autocomplete structure
  $.getJSON("data/sites.json", function(json) {

    jsonData = json;
    var qs = getQueryStrings();

    if (qs.app) {
      var appName = String(qs.app);
      // If it's a preset
      if (jsonData[appName]) {

        lastName = appName;

        var length = 16;
        var max = json[appName].maxLength;

        if (!max) {
          max = defaultMaxLength;
        }

        if (!(json[appName].minLength <= length && length <= max)) {
          length = max;
        }

        $("#length").val(length);

        // In case there's already a password (eg switching sites / presets) regen password
        process();


        if (json[appName].logo) {
          logo = json[appName].logo;
        } else {
          logo = "logos/"+appName+".svg";
        }


        // Set image
        $("#logoContainer").css("display","flex");
        $("img#logo").attr("src", logo);
        $("img#logo").attr("alt", appName);
        $("img#logo").attr("title", appName);
      }
      // Set the app name
      $("#app").val(appName);
      $("label[for='app']").addClass("active");
    }

    $.each(json, function(i, val) {
      if (val.logo) {
        autoCompleteData[i] = val.logo;
      } else {
        autoCompleteData[i] = "logos/"+i+".svg";
      }
    });

    // Setup possible autocomplete sites
    instance = $("input#app").autocomplete({
      data: autoCompleteData,

      // called when an autocomplete is used.
      onAutocomplete: function(val) {

        // Set image
        $("#logoContainer").css("display","flex");
        $("img#logo").attr("src", autoCompleteData[val]);
        $("img#logo").attr("alt", val);
        $("img#logo").attr("title", val);

        // If it's an alias for another app
        if (json[val].alias) {
          // Change the name of the app we're using to its alias
          val = json[val].alias;
          debug("Using alias: "+val);
        }

        lastName = val;

        var length = 16;
        var max = json[val].maxLength;

        if (!max) {
          max = defaultMaxLength;
        }

        if (!(json[val].minLength <= length && length <= max)) {
          length = max;
        }

        $("label[for=length]").addClass("active");
        $("#length").val(length);

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
    $("#app").focus();

  });


  $.getJSON("data/themes.json", function(json) {
    themeData = json;
    $.each(themeData, function(index, item) {
      $("#fabs").append("<li><a name='themes' class='btn-floating' onclick='changeTheme(\""+index+"\");' id='"+index+"' ><i class='material-icons'>color_lens</i></a></li>");

      $("head").append("<style>a[id="+index+"]{background-color: "+themeData[index].background+" !important; border: 1px ;}a[id="+index+"] i {color: "+themeData[index].text+"}</style>");
    });

    // If the user has a prefered theme
    if (getCookie("theme") !== undefined) {
      debug("Found a prefered theme. Loading " + getCookie("theme"));
      changeTheme(getCookie("theme"));
      // Use the clicked CSS for the button
      $("#"+getCookie("theme")).prop("checked", true);
    } else { // If no theme cookie exists
      // Use the clicked CSS for the first radio button (Vanilla)
      $("input[name='themes'][type=radio]").first().prop("checked", true);
      changeTheme(defaultTheme);
    }

    // Set up the theme picker FAB after all themes are added
    $("#themeSelector").floatingActionButton({
      direction: "left", // Direction menu comes out
      hoverEnabled: false, // Hover disabled
      toolbarEnabled: false // Toolbar transition disabled
    });

    // Set up the theme picker again so that the animation works.
    $("#themeSelector").floatingActionButton({
      direction: "left",hoverEnabled: false,toolbarEnabled: false
    });
  });


  // Initialize the copy button
  var clipboard = new Clipboard("#copy");

  clipboard.on("success", function(e) {

    if (e.text === "") {
      M.toast({html:"You have no password to copy.", displayLength:4000, classes:"warning"});
    } else {
      M.toast({html:"Successfully copied!", displayLength:4000, classes:"success"});
    }

  });

  // on change of password submit
  $("#pass").on("keyup", function(e) {

    // If there's a password
    if ($("#pass").val()) {
      Math.seedrandom($("#pass").val());
      $("#pass").attr("style", "--underlineColor: HSL(" + getRandomArbitrary(0, 360) + ", " + getRandomArbitrary(60, 100) + "%, " + getRandomArbitrary(45, 80) + "%)");
    } else {
      $("#pass").removeAttr("style");
    }

    // Regen the password
    process();
  });

  // Executed when you type in the app field
  $("#app").on("keyup", function(e) {

    // If they pressed enter AND the suggestions are open AND no suggestions are selected
    if (e.which != 13 ) {
      // Clear logo
      $("#logoContainer").css("display","none");
      $("img#logo").removeAttr("src");
      $("img#logo").removeAttr("alt");
      $("img#logo").removeAttr("title");
    }
    var c = $("#app").val();

    // If you've changed the app name
    if (lastName != c) {
      lastName = c;
      process();
    }

  });

  // On change in length field up and down or typing (not scrolling)
  $("#length").on("input", function(event) {
    process();
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
  $(".tooltipped").tooltip();
  // Initialize the tabs
  $(".tabs").tabs();
  var tabs = M.Tabs.getInstance($(".tabs"));

  if (getCookie("showSettings") == "true") {
    $("#engineSelector").show();
  }


  if (mode == "new" || mode == "old") {
    tabs.select(mode);
  } else {
    throw new Error( 'Invalid mode  "'+ mode +'" '); // Using the inferior kind of quotes so I may see the superior ones apon error
  }

});

function save() { // Save the current master password as a cookie

  if ($("#pass").val()) { // If there's a password
    setCookie("password", $("#pass").val());
    M.toast({html:"Password saved to your device!", displayLength:4000, classes:"success"});
  }

}

function load() { // Load the saved password from cookie
  if (getCookie("password") !== undefined) {
    var password = getCookie("password"); // Get the password from the cookie
    $("label[for='pass']").addClass("active"); // Raise the text on the input
    $("#pass").val(password); // Fill the password input with the correct password
    process();
    M.toast({html:"Password loaded from your device!", displayLength:4000, classes:"success"});
  } else {
    M.toast({html:"You have no saved password to load.", displayLength:4000, classes:"warning"});
  }

  Math.seedrandom(password);
  $("#pass").attr("style", "--underlineColor: HSL(" + getRandomArbitrary(0, 360) + ", " + getRandomArbitrary(60, 100) + "%, " + getRandomArbitrary(45, 80) + "%)");
}

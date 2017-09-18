"use strict";
var lastName = ""; // Name of last application
var autoCompleteData = {}; //Here for scope perposes
var jsonData = {}; //As am I.
var defaultMinLength = 4; //We
var defaultMaxLength = 512; //All
var minLength = defaultMinLength; //Are,
var maxLength = defaultMaxLength; //Really
var currentLength = 16;
var defaultTheme = "Vanilla";
var themeData = {};

function getQueryStrings() {
  var assoc  = {};
  var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
  var queryString = location.search.substring(1);
  var keyValues = queryString.split("&");

  for(var i in keyValues) {
    var key = keyValues[i].split("=");
    if (key.length > 1) {
      assoc[decode(key[0])] = decode(key[1]);
    }
  }

  return assoc;
}

//Setup
window.onload = function() {

  //Initialize the copy button
  var clipboard = new Clipboard("#copy");

  clipboard.on("success", function(e) {
    Materialize.toast("Successfully copied!", 4000, "success")
  });

  //on change of password submit
  $("#pass").on("keyup", function(e) {
    //If the password field has something in it
    if ($("#app").val() != "" && $("#pass").val() != "") {
      process();
    } else {
      $("#result").text("");
      $("#copy").hide();
    };
  });

  //Executed when you type in the app field
  $("#app").on("keyup", function(e) {
    //If they pressed enter and the suggestions are open
    if(e.which == 13 && $("ul.autocomplete-content").height() > 0) {
      //Click first result
      $("ul.autocomplete-content li:first").mousedown();
    };
    var c = $("#app").val();

    //If you've changed the app name
    if (lastName != c){
      lastName = c;
      history.pushState(c, c);


      //If the both fields have something in them
      if (c != "" && $("#pass").val() != "") {
        process();
      } else {
        $("#result").text("");
        $("#copy").hide();
      };

      //Clear logo
      $("#logoContainer").css("display","none");
      $("img#logo").removeAttr("src");
      $("img#logo").removeAttr("alt");
      $("img#logo").removeAttr("title");
    };


  });

  //On change in length field up and down or typing (not scrolling)
  $("#length").on("input", function() {
    //If we've decreased the length
    if ($("#length").val() < currentLength) {
      //Just trim the password
      $("#result").text($("#result").text().substring(0, $("#length").val()));
    } else {//If we've increased in length
      //If both the password field and the app field have something in them.
      if ($("#pass").val() != "" && $("#app").val() != "") {
        process();
      };
    };
    currentLength = parseInt($("#length").val());
  });
};

//For showing / hiding the password
function passwordToggle() {
  //If the switch is on / to the right / "Hide"
  if ($("#passwordToggle").prop("checked")) {
    //Make the password field use blobs
    $("#pass").attr("type", "password");
  } else { //If it's off
    //Make the password field use actual text so you can see/copy it.
    $("#pass").attr("type", "text");
  };
};

function changeTheme(passedTheme){

  if (passedTheme=="") {
    passedTheme = defaultTheme;
  } else if (!themeData[passedTheme]) {
    throw "invalid theme: "+passedTheme;
  } else {
    var html = document.getElementsByTagName('html')[0];
    document.documentElement.style.setProperty("--accentColor", themeData[passedTheme]["accent"]);
    document.documentElement.style.setProperty("--lightAccent", themeData[passedTheme]["lightAccent"]);
    document.documentElement.style.setProperty("--textColor", themeData[passedTheme]["text"]);
    document.documentElement.style.setProperty("--backgroundColor", themeData[passedTheme]["background"]);
    document.documentElement.style.setProperty("--internalColor", themeData[passedTheme]["internal"]);
    document.documentElement.style.setProperty("--incorrectColor", themeData[passedTheme]["incorrect"]);
    document.documentElement.style.setProperty("--correctColor", themeData[passedTheme]["correct"]);
    document.documentElement.style.setProperty("--inputColor", themeData[passedTheme]["inputColor"]);
    document.documentElement.style.setProperty("--linkColor", themeData[passedTheme]["linkColor"]);
  };

};



//Take inputs and display a password. (The black box)
function process() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //Defualt character set (Set here but overwritten if there's a custom one.)
  var regex = ""; //By default we have no regex but reset it to a blank string so we don't carry them over
  var appName = $("#app").val();
  var masterPass = $("#pass").val();
  var length = Math.trunc($("#length").val()); //Get the desired length of a password and make sure it's an integer
  var result = ""; //Has to be here, not in the loop for scope purposes
  var minLength = defaultMinLength;

  if (jsonData[appName]) { //If it's a site with a preset

    //If it's an alias for another app
    if (jsonData[appName]["alias"]) {
      //Change the name of the app we're using to its alias
      appName = jsonData[appName]["alias"];
    };

    //If it has a custom character set
    if ("chars" in jsonData[appName]) {
      //Replace the default character set with the supplied one.
      chars = jsonData[appName]["chars"];
    };

    //If it has a custom regex that passwords need to fit
    if ("regex" in jsonData[appName]) {
      //Setup custom regex
      regex = jsonData[appName]["regex"];
      var pattern = new RegExp(regex);
    };
  };

  //Set the generation seed
  Math.seedrandom(appName.toLowerCase() + masterPass);

  //password generation cycle
  while (true) {
    result = "";
    while (result.length < length) {

      //Add one seeded random character at a time
      result += chars[Math.floor(Math.random() * chars.length)];

    };
    //If there's a custom regex
    if (regex !== "") {
      if (pattern.test(result)) {
        break;
      }
    } else { // no custom regex
      break;
    }
  }

  //The password has been generated

  //Display password
  $("#result").text(result);
  $("#copy").css("display", "block");
};

//on application name change
function updateLimits() {
  var appName = $("#app").val();

  //We assume there's no preset
  reBindMouse(defaultMinLength, defaultMaxLength);
  $("#length").attr("min", defaultMinLength);
  $("#length").attr("max", defaultMaxLength);
  minLength = defaultMinLength;
  maxLength = defaultMaxLength;

  //If there's a preset then we overwrite the defualts
  if (jsonData[appName]) {

    //If it's an alias for another app
    if (jsonData[appName]["alias"] && jsonData[jsonData[appName]["alias"]]) {
      //Change the name of the app we're using to its alias
      appName = jsonData[appName]["alias"];
    } else if (jsonData[appName]["alias"] && !jsonData[jsonData[appName]["alias"]]) {
      throw "Invalid alias"
    };

    //And that preset has a minLength
    if ("minLength" in jsonData[appName]) {

      //Only update if it's actually a different number.
      if (jsonData[appName]["minLength"] != minLength) {
        //Update global var
        minLength = jsonData[appName]["minLength"]
        //Also set the length input so it can't go under the limit
        $("#length").attr("min", minLength);
        reBindMouse(minLength);
      }
    }

    if ("maxLength" in jsonData[appName]) {
      //Only update if it's actually a different number.
      if (jsonData[appName]["maxLength"] != maxLength) {
        //Update global var
        maxLength = jsonData[appName]["maxLength"]
        //Also set the length input so it can't go under the limit
        $("#length").attr("max", maxLength);
        reBindMouse(minLength, maxLength);
      }
    }
  }
};

function reBindMouse(min, max) {

  if (typeof min === "undefined") {
    min = defaultMinLength;
  };

  if (typeof max === "undefined") {
    max = defaultMaxLength;
  };

  //Unbind the current on function
  $("#length").unbind("mousewheel");
  //Update the mousewheel length input bind to keep <= the new limit
  $("#length").on("mousewheel", function(event, delta) {
    if (delta > 0) {
      // Scrolling up
      if (parseInt(this.value) < max) {

        if (parseInt(this.value) < min) {
          this.value = min
        } else {
          this.value = parseInt(this.value) + 1;
        };


        //Update password
        if ($("#pass").val() != "" && $("#app").val() != "") {
          process();
        }
      }
    } else {
      // Scrolling down
      if (parseInt(this.value) > min) {
        if (parseInt(this.value) > max) {
          this.value = max
        } else {
          this.value = parseInt(this.value) - 1;
        };

        //Update password
        // Can't trim since regexes exist
        if ($("#pass").val() != "" && $("#app").val() != "") {
          process();
        };
      };
    };

    currentLength = parseInt(this.value);


    return false;

  });
}

//On page load
$(function() {

  // Stop manual typing of invalid lengths
  $("#length").on("keydown keyup", function(e){

    if ($(this).val() > maxLength
    && e.keyCode != 46 // delete
    && e.keyCode != 8 // backspace
    ) {
     e.preventDefault();
     $(this).val(maxLength);
    } else if ($(this).val() < minLength
      && e.keyCode != 46 // delete
      && e.keyCode != 8 // backspace
    ){
      e.preventDefault();
      $(this).val(minLength);
    };
    process();
  });

  updateLimits();
  reBindMouse();

  //Process the sites.json for the autocomplete structure
  $.getJSON("data/sites.json", function(json) {

    jsonData = json;

    var qs = getQueryStrings();

    if (qs["app"]) {
      var appName = String(qs["app"]);
      //If it's a preset
      if (jsonData[appName]) {

        lastName = appName;
        history.pushState(appName, appName);

        var length = 16;
        var max = json[appName]["maxLength"];

        if (!max) {
          max = defaultMaxLength;
        };

        if (!(json[appName]["minLength"] <= 16 <= max)) {
          length = json[appName]["maxLength"];
        };

        $("#length").val(length);

        //If there's already a password (eg switching sites / presets)
        if ($("#pass").val()) {
          //regen password
          process();
        }

        //Set image
        $("#logoContainer").css("display","flex");
        $("img#logo").attr("src", json[appName]["logo"]);
        $("img#logo").attr("alt", appName);
        $("img#logo").attr("title", appName);
      }
      // Set the app name
      $("#app").val(appName);
      $("label[for='app']").addClass("active");
    };

    $.each(json, function(i, val) {
      autoCompleteData[i] = val.logo;
    });

    //Setup possible autocomplete sites
    $("input#app").autocomplete({
      data: autoCompleteData,

      //called when an autocomplete is used.
      onAutocomplete: function(val) {

        lastName = val;
        history.pushState(val, val);

        var length = 16;
        var max = json[val]["maxLength"];

        if (!max) {
          max = defaultMaxLength;
        };

        if (!(json[val]["minLength"] <= 16 <= max)) {
          length = json[val]["maxLength"];
        };

        $("#length").val(length);

        //If there's already a password (eg switching sites / presets)
        if ($("#pass").val()) {
          //regen password
          process();
        }

        //Set image
        $("#logoContainer").css("display","flex");
        $("img#logo").attr("src", json[val]["logo"]);
        $("img#logo").attr("alt", val)
        $("img#logo").attr("title", val);
      },
      minLength: 0,
    });

  });


  $.getJSON("data/themes.json", function(json) {
    themeData = json;
    $.each(themeData, function(index, item){
      $("#themeForm").append("<p><input name='themes' class='with-gap' onclick='changeTheme(\""+index+"\");' type='radio' id='"+index+"' /><label for='"+index+"'></label></p>");
      $("head").append("<style>form label[for="+index+"]::before{background-color: "+themeData[index]["accent"]+" !important; border: none !important;}</style>");
      $("head").append("<style>form label[for="+index+"]::after{border: none !important; transform: scale(0.6) !important; background-color: "+themeData[index]["background"]+" !important;}</style>");
    });
    //Click the first radio button (Vanilla)
    $("input[name='themes'][type=radio]").first().prop("checked", true);
    changeTheme(defaultTheme);
  });


});

function save() { //Save the current master password as a cookie

  if ($("#pass").val()) { // If there's a password
    document.cookie = "password=" + $("#pass").val() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;"; //Set cookie with no expiration date (Close enough)
    Materialize.toast("Password saved to your device!", 4000, "success");
  };

};

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function load() { //Load the saved password from cookie

  if (document.cookie.startsWith("password=")) {
    var password = getCookie("password"); // Get the password from the cookie
    $("label[for='pass']").addClass("active"); // Raise the text on the input
    $("#pass").val(password); //Fill the password input with the correct password
    process();
    Materialize.toast("Password loaded from your device!", 4000, "success");
  } else {
    Materialize.toast("You have no saved password to load.", 4000, "warning");
  };
};

//When forward/back buttons pressed
window.onpopstate = function(event) {
  $("#app").val(history.state);
  if ($("#app").val() != "") {
    $("label[for='app']").addClass("active");
  } else {
    $("label[for='app']").removeClass("active");
  };
  process();
};

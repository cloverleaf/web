var alphaNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var lastName = ""; // Name of last application
var autoCompleteData = {}; //Here for scope perposes
var jsonData = {}; //As am I.
var defaultMinLength = 4; //We
var defaultMaxLength = 255; //ALl
var minLength = defaultMinLength; //Are,
var maxLength = defaultMaxLength; //Really


//Setup
window.onload = function() {

  //Initialize the copy button
  var clipboard = new Clipboard('#copy');

  clipboard.on('success', function(e) {
    Materialize.toast('Successfully copied!', 4000, "success")
  });

  //on change of password submit
  $('#pass').on('input', function(e) {
    //If the password field has something in it
    if ($("#app").val() != "" && $("#pass").val() != "") {
      process();
    } else {
      $("#result").text("");
      $("#copy").hide();
    };
  });

  //Executed when you type in the app field
  $('#app').on('input', function(e) {
    var c = $("#app").val();
    lastName = c;
    history.pushState(c, c);


    //If the both fields have something in them
    if (c != "" && $("#pass").val() != "") {
      process();
    } else {
      $("#result").text("");
      $("#copy").hide();
    }
  });

  //On change in length field up and down or typing (not scrolling)
  $('#length').on('input', function(e) {
    //If both the password field and the app field have something in them.
    if ($("#pass").val() != "" && $("#app").val() != "") {
      process();
    }
  });

};

//For showing / hiding the password
function passwordToggle() {
  //If the switch is on / to the right / "Hide"
  if ($("#passwordToggle").prop('checked')) {
    //Make the password field use blobs
    $("#pass").attr('type', 'password');
  } else { //If it's off
    //Make the password field use actual text so you can see/copy it.
    $("#pass").attr('type', 'text');
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
  var minLength = 4;

  //Set the generation seed
  Math.seedrandom(appName.toLowerCase() + masterPass);

  if (jsonData[appName]) { //If it's a site with a preset

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
    //If the preset has a custom minimum length
    if ("minLength" in jsonData[appName]) {
      //Use it. If there's no custom minimum length, it'll be 4
      minLength = jsonData[appName]["minLength"]
      //Updating the length field mins is handled by updateLimits()
    };
  };

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

  $("#copy").css('display', 'block');
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
      if (parseInt(this.value) < max) {
        this.value = parseInt(this.value) + 1;
      }
    } else {
      if (parseInt(this.value) > min) {
        this.value = parseInt(this.value) - 1;
      };
    }

    //Update password
    if ($("#pass").val() + $("#app").val() != "") {
      process();
    }

    return false;

  });
}

//On page load
$(function() {

  reBindMouse();

  //Process the sites.json for the autocomplete structure
  $.getJSON("data/sites.json", function(json) {

    jsonData = json;

    $.each(json, function(i, val) {
      autoCompleteData[i] = val.logo;
    });

    //Setup possible autocomplete sites
    $('input#app').autocomplete({
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
      },
      minLength: 0,
    });

  });

});

function save() { //Save the current master password as a cookie

  if ($("#pass").val()) { // If there's a password
    document.cookie = "password=" + $("#pass").val() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;"; //Set cookie with no expiration date (Close enough)
    Materialize.toast('Password saved to your device!', 4000, "success");
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
    Materialize.toast('Password loaded from your device!', 4000, "success");
  } else {
    Materialize.toast('You have no saved password to load.', 4000, "warning");
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

var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //Defualt character set
var autoCompleteData = {};
var jsonData = {};
var minLength = 0;

//Setup
window.onload=function(){
  new Clipboard('#copy');

  //Enter detection & handling
  $("input").on('keyup', function (e) {
      if (e.keyCode == 13) {
          process();
      };
  });

  //on change of password submit
  $('#pass').on('input',function(e){
    process();
  });

  $('#app').on('input',function(e){
    if ($("#pass").val() != "") {
      process();
    }
  });

  $('#length').on('input',function(e){
    if ($("#pass").val() != "" && $("#app").val() != "") {
      process();
    }
  });

};

function passwordToggle(){
  if ($("#passwordToggle").prop('checked')) {
    $("#pass").attr('type', 'password');
  } else {
    $("#pass").attr('type', 'text');
  };
};

//On submit
function process(){
  var regex = "";
  var appName = $("#app").val();
  var masterPass = $("#pass").val();
  var length = Math.trunc($("#length").val());
  var result = ""; //Has to be here, not in the loop for scope purposes
  var minLength = 0;

  if (appName && masterPass && length){ //If all the inputs have something in them.

    //Set the generation seed
    Math.seedrandom(appName.toLowerCase()+masterPass);

    if (jsonData[appName]){//If it's a site with a preset

      //If it has a custom character set
      if (jsonData[appName]["chars"]){
        chars = jsonData[appName]["chars"];
      };
      //If it has a custom regex that passwords need to fit
      if (jsonData[appName]["regex"]){
        regex = jsonData[appName]["regex"];
        var pattern = new RegExp(regex);
      };
      if (jsonData[appName]["minLength"]){
        minLength = jsonData[appName]["minLength"]
      };
    };


    //If there's a site with a minimum length, this will be custom, otherwise it'll be 0
    if (length<minLength){
      $("#length").addClass("invalid");
    } else {

      $("#length").removeClass("invalid");

      //password generation cycle
      while (true) {
        result = "";
        while (result.length < length ) {

          //Add one seeded random character at a time
          result += chars[Math.floor(Math.random() * chars.length)];

        };
        //If there's a custom regex
        if (regex !== ""){
          if (pattern.test(result)){
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
      $("#result").css('display', 'block');

      $("input").each(function() {
          $(this).removeClass("invalid");
      });
    }} else{

      $("input:not(#length)").each(function() {
        if ($(this).val() == ""){
          $(this).addClass("invalid");
        }else{
          $(this).removeClass("invalid");
        };
      });
    };

    };

//On page load
$(function() {
  //Set up the scroll wheel so it edits the length value
  $("#length").bind("mousewheel", function(event, delta) {
      if (delta > 0) {
          this.value = parseInt(this.value) + 1;
      } else {
          if (parseInt(this.value) > 4) {
              this.value = parseInt(this.value) - 1;
          }
      }

      //Update password
      if ($("#pass").val() + $("#app").val() != "") {
        process();
      }

      return false;

  });

  //Process the sites.json for the autocomplete structure
  $.getJSON("data/sites.json", function(json) {

    jsonData = json;

    $.each(json, function(i, val){
      autoCompleteData[i] = val.logo;
    });

    //Setup possible autocomplete sites
    $('input#app').autocomplete({
      data: autoCompleteData,
      limit: 3,
      onAutocomplete: function(val) {

        var length = 16;
        var max = json[val]["maxLength"];

        if (!max){
          max = 128;
        };

        if (!(json[val]["minLength"] <= 16 <= max)){
          length = json[val]["maxLength"];
        };

        $("#length").val(length);
      },
      minLength: 0,
    });
  });

});

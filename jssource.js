var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

window.onload=function(){
  new Clipboard('#copy');

  $("input").on('keyup', function (e) {
      if (e.keyCode == 13) {
          $("#submit").click();
      };
  });
};

function process(){
  var appName = $("#app").val().toLowerCase();
  var masterPass = $("#pass").val();
  var length = Math.trunc($("#length").val());
  var result = "";

  if (length < 4){
    $("#length").addClass("invalid");
    return;
  } else{
    $("#length").removeClass("invalid");
  };

  if (appName && masterPass && length){ //If all the inputs have something in them.


    Math.seedrandom(appName+masterPass);

    while (result.length < length) {
    result += chars[Math.floor(Math.random() * chars.length)];
    }

    $("#result").text(result);


    $("#copy").css('display', 'block');
    $("#result").css('display', 'block');

    $("input").each(function() {
        $(this).removeClass("invalid");
    });
  } else{

    $("input:not(#length)").each(function() {
      if ($(this).val() == ""){
        $(this).addClass("invalid");
      }else{
        $(this).removeClass("invalid");
      };
    });
  };
};

$(function() {
    $("#length").bind("mousewheel", function(event, delta) {
        if (delta > 0) {
            this.value = parseInt(this.value) + 1;
        } else {
            if (parseInt(this.value) > 4) {
                this.value = parseInt(this.value) - 1;
            }
        }
        return false;
     });

});

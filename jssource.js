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

  $("#copy").css('display', 'block');
  $("#result").css('display', 'block');

  var result = "";

  Math.seedrandom(appName+masterPass);

  while (result.length < 8) {
  result += chars[Math.floor(Math.random() * chars.length)];
  }
  $("#result").text(result);
};

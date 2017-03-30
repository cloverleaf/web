var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

window.onload=function(){
  new Clipboard('#copy');
};

function process(){
  $("#copy").css('display', 'block');
  $("#result").css('display', 'block');

  var result = "";

  Math.seedrandom($("#app").val()+$("#pass").val());

  while (result.length < 8) {
  result += chars[Math.floor(Math.random() * chars.length)];
  }
  $("#result").text(result);
};

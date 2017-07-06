$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age >= 17) {
    $("#over17").show();
  } else {
    $("#under17").show();
  };

});

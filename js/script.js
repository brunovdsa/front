//POSICIONAMENTO SIDEBAR INÍCIO
$( document ).ready(function() {
    contentPosition('#sideContent');
    contentPosition('#formulario');

});

function contentPosition(customVar){
    container = $('#sidebar').outerHeight();
    content   = $(customVar).outerHeight();
    position  = (container-content)/2;

    $(customVar).offset({
        top : position
    });
}
//POSICIONAMENTO SIDEBAR FIM

//MOSTRAR SENHA INÍCIO
function myFunction() {
  var x = document.getElementById("password-field");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//MOSTRAR SENHA FIM

//EFEITO SENHA ERRADA INÍCIO

$(document).ready(function() {
$("#login-btn").click(function() {
var email = $("#Email").val();
var password = $("#password-field").val();
if (email == "bruno.sa@opentechgr.com.br" && password == "acertoumiseravi") {
$("#message").html("Account Validated!!!");
}
else {
$("#formulario").effect("shake");
$("#message").html('***Invalid email or password***');
}
});
});
//EFEITO SENHA ERRADA INÍCIO

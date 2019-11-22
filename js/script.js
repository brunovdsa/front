$( document ).ready(function() {
    contentPosition('#sideContent');
    contentPosition('#formulario');
    myFunction();
});

function contentPosition(customVar){
    container = $('#sidebar').outerHeight();
    content   = $(customVar).outerHeight();
    position  = (container-content)/2;

    $(customVar).offset({
        top : position
    });
}


function myFunction() {
  var x = document.getElementById("password-field");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

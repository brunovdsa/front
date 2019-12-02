//EFEITO SENHA ERRADA - INÍCIO

$(document).ready(function () {
    $("#login-btn").click(function () {
        var email = $("#email").val();
        var password = $("#senha").val();
        if (email == "bruno.sa@opentechgr.com.br" && password == "acertoumiseravi") {
            $("#message").html("Ok");
        } else {
            $("#formulario").effect("shake");
            $("#message").html('Login ou senha inválidos');
        }
    });
});


<?php

    $nome = filter_input (INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input (INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $senha = filter_input (INPUT_POST, 'senha', FILTER_SANITIZE_STRING);

    //echo "Nome: $nome";
    //echo "E-mail: $email";
    //echo "Senha: $senha";

    include_once("conexao.php")
?>

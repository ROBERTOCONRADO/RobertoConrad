<?php
//CONFIGURAÇOES GERAIS
$servidor="localhost";
$usuario="root";
$senha="";
$banco="meu_banco";
//CONEXAO
$pdo = new PDO("mysql:host=$servidor;dbname=$banco",$usuario,$senha);

?>
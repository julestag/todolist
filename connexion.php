<?php
$bdd = new PDO('mysql:host=localhost;dbname=myutils;', 'jules', '');
if(isset($_POST['submit'])){
    if (isset($_GET["var1"]) && isset($_GET["var2"])) {

    $afaire = htmlspecialchars($_GET['var1']);
    $fait = htmlspecialchars($_GET['var2']);
    $envoi = $bdd->query("INSERT INTO myutils (afaire, fait) VALUES ($afaire, $fait)");
}
}
?>
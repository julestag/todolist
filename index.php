<?php
include("connexion.php");
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
</head>
<body>
<div id="myDIV" class="header">
    <h2>MY TO DO LIST</h2>


    <form method="POST">
    <input type="text" name="texte" id="myInput" placeholder="A faire...">
    <span onclick="newElement()" type="submit" name="submit" class="addBtn">Ajouter</span>
    <input type="submit" id="boutonb" name="submit" class="lol">
  </form>
  </div>
  <h3> À faire :</h3>
  <ul id="myUL">
  </ul>
  <h3>Finie : </h3> 
  <ul id="myUL2">
  </ul>
</body>
<script src="script.js"></script>

</html>
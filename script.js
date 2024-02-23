function newElement() {
    
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.id = "test";
    li.appendChild(t);
    if (inputValue === '') {
      alert("écrire quelque chose");
    } else {
      document.getElementById("myUL").appendChild(li);
    }

    var liste = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < liste.length; i++) {
      var span = document.createElement('button');
      var txt = document.createTextNode("Supprimer");
      span.className = "supprime";
      span.appendChild(txt);
      liste[i].appendChild(span);
    }
    for (i = 0; i < liste.length; i++) {
      var span = document.createElement('button');
      var txt = document.createTextNode("fait");
      span.className = "fait";
      span.appendChild(txt);
      liste[i].appendChild(span);
    }

    var supprime = document.getElementsByClassName("supprime");
    var i;
    for (i = 0; i < supprime.length; i++) {
      supprime[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
     
    var buton = document.getElementsByClassName("fait");
    var i;
    for (i = 0; i < buton.length; i++) {
      buton[i].onclick = function() {
        var div = this.parentElement;
        div.style.background = "#CBD5C0";
        document.getElementById("myUL2").appendChild(div);

      }
    }
    document.getElementById("boutonb").addEventListener("click",lancement);
  }
  function lancement(){
     var afaire = document.getElementsByClassName('myUL');
     var fait = document.getElementsByClassName('myUL2');
     window.location.href = "?var1=" + afaire + "&var2=" + fait;
    }
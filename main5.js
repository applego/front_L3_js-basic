for(var i = 0;i<5;i++){
  var p = document.createElement("p");
  document.getElementById("box").appendChild(p);
  p.appendChild(document.createTextNode("Hello World"));
  p.setAttribute("class","bordered");
}
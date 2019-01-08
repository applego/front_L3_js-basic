//boxの中身を空にする
document.getElementById("box").innerHTML = "";

//10回繰り返す
for(var i = 1; i <= 10; i++){
  document.getElementById("box").innerHTML += i + "<br>";
}
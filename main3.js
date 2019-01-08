document.getElementById("my-button").onclick = function(){
  // 0以上1未満のランダムな数値を変数numに入れる
  var num = Math.random();
  
  document.getElementById("box").innerHTML = num + "<br>";
  
  if(num >= 0.5){
    document.getElementById("box").innerHTML += "当たり！";
  }else{
    document.getElementById("box").innerHTML += "ハズレ...";
  }
};
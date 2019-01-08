document.getElementById("box").innerHTML = new Date().toLocaleString();

document.getElementById("my-button").onclick = function(){
  document.getElementById("box").innerHTML += "どん!<br>";
};
//あいさつ
document.getElementById("greeting-button").onclick = function(){
  // var greeting = greet();
  // var targetName = document.getElementById("name").value;
  
  var greetingObj = greet();
  
  //確認のため、コンソールに表示
  //console.log("現在時刻："+hour+"時");
  
  document.getElementById("box").innerHTML = `${greetingObj.greetingWord}、${greetingObj.targetName}さん`;
};

//元気にあいさつ cheerful-button
document.getElementById("cheerful-button").onclick = function(){
  var greetingObj = greet();
  
  document.getElementById("box").innerHTML = `${greetingObj.greeting}!、${greetingObj.targetName}さん!!!`;
};

//遅れてあいさつ
document.getElementById("late-button").onclick = function(){
  var targetName = document.getElementById("name").value;
  
  setTimeout(function(){
    //この中が一秒後に実行される
    document.getElementById("box").innerHTML = `遅れてごめん、${targetName}さん`;
  },1000);
};

//時間帯によって挨拶を変更する処理を関数として独立させる
function greet(){
  var greetingObj;
  var greetingWord;
  var hour = new Date().getHours();
  var targetName = document.getElementById("name").value;
  
  if(6 <= hour && hour < 12){
    greetingWord = "おはよう";
  }
  else if(12 <= hour && hour <18){
    greetingWord = "こんにちは";
  }
  else{
    greetingWord = "こんばんは";
  }
  
  greetingObj = {
    greetingWord: greetingWord,
    targetName: targetName
  };
  
  //確認のため、コンソールに表示
  console.log("greetingObj:",greetingObj);
  
  return greetingObj;
}

//my-select
document.getElementById("my-select").onchange = function(){
  console.log("value:"+this.value);
};

//マウスが乗った時
document.getElementById("box").onmouseover = function(){
  // thisはイベント発生元の要素（<div id="box">)を表す
  this.innerHTML = "マウスが乗った!";
};

//マウスが離れた時
document.getElementById("box").onmouseout = function(){
  this.innerHTML = "マウスが離れた!";
};

//form
document.getElementById("my-form").onsubmit = function(){
  var inputWord = document.getElementById("input-word").value;
  
  console.log(inputWord);
  return false;
}

document.getElementById("my-link").onclick = function(){
  return false;
};
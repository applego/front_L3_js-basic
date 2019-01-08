function getNum1() {
  // num1の数値を戻り値としてreturnする処理を書いてください
  var num1 = parseFloat(document.getElementById("num1").value);
  return num1;
}

function getNum2() {
  // num2の数値を戻り値としてreturnする処理を書いてください
  var num2 = parseFloat(document.getElementById("num2").value);
  return num2;
}

function showResult(num) {
  // <div id="box">にnumを表示する処理を書いてください
  document.getElementById("box").innerHTML = num;
}

function checkNum(){
  var result = false;
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  if(num1 == "" && num2 == ""){
    window.alert("数値1、数値2を入力してください。");
  }
  else if(num1 == "" && num2 != ""){
    window.alert("数値1を入力してください。");
  }
  else if(num1 != "" && num2 == ""){
    window.alert("数値2を入力してください。");
  }
  else if(isNaN(num1) && isNaN(num2)){
    window.alert("数値1、数値2に数値をを入力してください。");
  }
  else if(isNaN(num1) && !isNaN(num2)){
    window.alert("数値1に数値を入力してください。");
  }
  else if(!isNaN(num1) && isNaN(num2)){
    window.alert("数値2に数値を入力してください。");
  }
  else{
    result = true;
  }
  return result;
}

document.getElementById("add-button").onclick = function(){
  if(checkNum()){
    var result = getNum1() + getNum2();
    showResult(result);
  }
};

document.getElementById("sub-button").onclick = function(){
  if(checkNum()){
    var result = getNum1() - getNum2();
    showResult(result);
  }
};

document.getElementById("mul-button").onclick = function(){
  if(checkNum()){
    var result = getNum1() * getNum2();
    showResult(result);
  }
};

document.getElementById("div-button").onclick = function(){
  if(checkNum()){
    var result = getNum1() / getNum2();
    showResult(result);
  }
};
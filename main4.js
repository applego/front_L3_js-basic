document.getElementById("my-form").onsubmit = function(){
  document.getElementById("box").innerHTML =
  parseFloat(document.getElementById("num1").value) +
  parseFloat(document.getElementById("num2").value);
  return false;
};
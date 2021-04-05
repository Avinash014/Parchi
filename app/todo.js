var obj = document.getElementById("outputText");
var input = document.getElementById("inputText");

document.getElementById("submit").onclick = f;
document
  .getElementById("inputText")
  .addEventListener("keypress", function (event) {
    var key = event.which || event.keyCode;
    if (key == 13) f();
  });
function f() {
  var para = document.createElement("p"); //console.log("para "+para);
  var text = input.value; //console.log("text "+text);
  if (input.value == "") {
    alert("write something in INPUT");
    return;
  }
  var textNode = document.createTextNode(text);
  para.appendChild(textNode);
  obj.appendChild(para);
  input.value = "";
  var btn = document.createElement("button");
  //btn.style.clas
  btn.appendChild(document.createTextNode("X"));
  para.appendChild(btn);
  btn.addEventListener("click", function () {
    console.log("delete called");
    this.parentNode.remove();
  });

  para.addEventListener("click", function () {
    console.log("done called");
    this.classList.toggle("doneWork");
  });
}

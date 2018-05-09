/*
click
contextmenu
copy
dbclick
focus
focusout
help F1 input
keypress
mousedown
mousemove
mouseover
select
*/

//http://www.enlace.edu.mx/web/assets/fullpage/examples/imgs/bg2.jpg

let header = document.getElementById("header");
let paragraph = document.getElementById("paragraph");
let img = document.getElementById("img");
let btn = document.getElementById("btn");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let body = document.getElementById("body");
let box = document.getElementById("box");

box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "red";
box.style.borderRadius = "100px";

function headerOnMouseOver() {
  header.style.color = "red";
  header.style.fontFamily = "Sans Serif";
}

function headerOnMouseOut() {
  header.style.color = "black";
  header.style.fontFamily = "Serif";
}

function paragraphOnCopy() {
  paragraph.innerText = "HELLO WORLD!!";
}

function paragraphOnMenuContext() {
  paragraph.innerText = "This is the principal content";
}

function btnOnFocus() {
  btn.value = "FOCUSED!!";
}

function btnOnBlur() {
  btn.value = "SUBMIT";
}

function btnOnClick() {
  document.getElementById("body").style.backgroundColor = "black";
}

function imgOnMouseOver() {
  img.style.height = "200px";
  img.style.width = "200px";
}

function imgOnMouseOut() {
  img.style.height = "100px";
  img.style.width = "100px";
}

function imgOnDrag() {
  console.log("DRAGGING IMAGE");
}

function imgOnDragEnd() {
  console.log("DRAG END");
}

function divOnClick() {
  alert("div FUNCTION");
}

function stopEvent(event) {
  event.stopPropagation();
  console.log("Event Stopped");
}

function random(number) {
  return Math.floor(Math.random()*(number+1));
}

function bodyOnKeyDown() {
  box.style.backgroundColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  txt.style.backgroundColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}

function btnBOnClick() {
  header.removeEventListener("mouseover", headerOnMouseOver);
}

function paragraphOnDbClick() {
  paragraph.innerText = "Double click Changed";
}

function txtOnSelect() {
  txt.style.backgroundColor = "#fff";
}

function bodyOnContextMenu() {
  body.remove();
}

header.addEventListener("mouseover", headerOnMouseOver);
header.addEventListener("mouseout", headerOnMouseOut);
paragraph.addEventListener("copy", paragraphOnCopy);
paragraph.addEventListener("menucontext", paragraphOnMenuContext);
btn.addEventListener("focus", btnOnFocus);
btn.addEventListener("blur", btnOnBlur);
btn.addEventListener("click", btnOnClick);
img.addEventListener("mouseover", imgOnMouseOver);
img.addEventListener("mouseout", imgOnMouseOut);
div1.addEventListener("click", divOnClick);
div2.addEventListener("click", divOnClick);
div3.addEventListener("click", divOnClick);
img.addEventListener("drag", imgOnDrag);
img.addEventListener("dragend", imgOnDragEnd);
body.addEventListener("keydown", () => console.log("keydown"));
body.addEventListener("keydown", bodyOnKeyDown);


txt.addEventListener("select", txtOnSelect);
paragraph.addEventListener("dblclick", paragraphOnDbClick);
body.addEventListener("keyup", () => console.log("keyup"));
body.addEventListener("keypress", () => console.log("keypress"));
body.addEventListener("contextmenu", bodyOnContextMenu);


div1b.addEventListener("click", divOnClick);
div2b.addEventListener("click", divOnClick);
div3b.addEventListener("click", stopEvent);
div4b.addEventListener("click", divOnClick);

btnB.addEventListener("click", btnBOnClick);

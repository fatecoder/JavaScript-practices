let parent = document.getElementById("parent-list");

function delegator(event) {
  if(event.target && event.target.nodeName == "LI") {
    console.log("Item with id: " + event.target.id + " was clicked!");
  }
}

parent.addEventListener("click", delegator);


function catchingDefault(event) {
  event.preventDefault();
}

menu.addEventListener("click", catchingDefault);

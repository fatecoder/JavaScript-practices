let myTitle = document.getElementsByTagName("h1")[0];
let infoText = "<p>APPCODENAME: " + navigator.appCodeName + "</p>"+
			   "<p>APPNAME: " + navigator.appName + "</p>"+
			   "<p>APPVERSION: " + navigator.appVersion + "</p>"+
			   "<p>COOKIEENABLED: " + navigator.cookieEnabled + "</p>"+
			   "<p id='geo'>GEOLOCATION: " + navigator.geolocation + "</p>"+
			   "<p>LANGUAGE: " + navigator.language + "</p>"+
			   "<p>ONLINE: " + navigator.onLine + "</p>"+
			   "<p>PRODUCT: " + navigator.product + "</p>"+
			   "<p>USERAGENT: " + navigator.userAgent + "</p>";

function success(pos) {
  geo.after("Coords: " + pos.coords.latitude +" , "+pos.coords.longitude);
  let linkMaps = document.createElement("a");
  linkMaps.href = "www.google.com/maps/@" + pos.coords.latitude + "," + pos.coords.longitude;
  linkMaps.target = "_blank";
  linkMaps.innerText = "MAPS";
  document.body.appendChild(linkMaps);
}

document.write(infoText);
myTitle.innerText = "Information";

document.body.style.color = "#fff";
document.body.style.background = "#000";

navigator.geolocation.getCurrentPosition(success);

let myDiv = document.createElement("div");
let myPara = document.createElement("p");
let text = document.createTextNode("PLATFORM: " + navigator.platform);

myPara.appendChild(text);
myDiv.appendChild(myPara);
document.body.appendChild(myDiv);
myDiv.style.textAlign = "center";

myPara.style.color = "red";

let newNode = document.createElement("h4");
let contentHeader = document.createTextNode("Window Object List");
let newLi = document.createElement("li");
let contentLi = document.createTextNode("OBJECT");

newNode.appendChild(contentHeader);
newLi.appendChild(contentLi);

document.getElementsByTagName("ul")[0].before(newNode);
document.getElementsByTagName("ul")[0].append(newLi);

//newLi.appendChild(contentLi);

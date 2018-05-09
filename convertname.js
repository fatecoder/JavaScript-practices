let name = prompt("Introduce your name");

function convertName(name){
  let convertedName = name.split("");
   console.log(convertedName[0].toUpperCase()+"."+convertedName[convertedName.indexOf(" ")+1].toUpperCase());
}

convertName(name);

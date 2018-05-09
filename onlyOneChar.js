let randomString = createRandomString();

function createRandomString() {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let onlyOne = Math.round(Math.random()*1);
  let theString = "";
  let theStringLength = Math.round(Math.random()*20)+1;

  if (onlyOne == 1) {
    let theLetter = Math.round(Math.random()*25);
    for (let i = 0; i < theStringLength; i++) {
      theString += letters[theLetter];
    }
  }else {
    for (let i = 0; i < theStringLength; i++) {
      theString += letters[Math.round(Math.random()*25)];
    }
  }
  return theString;
}

function oneChar(rString) {
  let proof = true;
  for (let i = 0; i < rString.length-1; i++) {
    if (rString[0] != rString[i+1]) {
      proof = false;
      break;
    }
  }
  return proof;
}

console.log(randomString);
console.log(oneChar(randomString));

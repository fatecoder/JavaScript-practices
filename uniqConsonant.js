let receivedString = prompt("introduce letters");

function isConsonant(letter) {
  let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  for (let character in consonants) {
	if (letter == consonants[character]) {
      return true;
    }
  }
  return false;
}

function isRepited(char, array) {
  for (let element in array) {
    if (array[element] == char) {
      return true;
    }
  }
  return false;
}

function countUniqueConsonants(rString) {
  let consonants = [];
  rString = rString.toLowerCase();
  for (let letter in rString) {
    if (isNaN(rString[letter])) {
      if (isConsonant(rString[letter]) && !isRepited(rString[letter], consonants)) {
        consonants.push(rString[letter]);
      }
    }
  }
  return consonants.length;
}

console.log("String introduced ==> " + receivedString);
console.log("Unique consonants counted ==> " + countUniqueConsonants(receivedString));


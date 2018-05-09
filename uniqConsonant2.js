let receivedString = prompt("input letters");

function countUniqueConsonants(receivedString) {
  let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  let numberConsonants = 21;
  for (let index in receivedString) {
    if (consonants.indexOf(receivedString[index]) >= 0) {
      consonants.splice(consonants.indexOf(receivedString[index]), 1);
    }
  }
  return numberConsonants - consonants.length;
}
console.log(receivedString);
console.log(countUniqueConsonants(receivedString));

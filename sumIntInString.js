let receivedString = prompt();

function isIntegerNumber(string) {
  let numbers = ['0','1','2','3','4','5','6','7','8','9'];
  let count = 0;
  for (let char in string) {
    for ( let n in numbers) {
      if (string[char] == numbers[n]) {
        count++;
      }
    }
  }
  return (count === string.length) ? true : false;
}

function sumIntegersInString(receivedString) {
  let total = 0;
  for (let char in receivedString) {
    //if (isIntegerNumber(receivedString[char])) {
	if (isNaN(receivedString[char]) === false) {
      total += Number(receivedString[char]);
    }
  }
  return total;
}

console.log("Introduced String ==> " + receivedString);
console.log("Total ==> " + sumIntegersInString(receivedString));

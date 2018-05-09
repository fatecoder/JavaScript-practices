function createRandomNumber() {
  return Math.round(Math.random()*100000000).toString();
}

function rearrangeNumber(rString) {
  rString = rString.split("");
  let comparator = 0;
  for (let i = 0; i < rString.length; i++) {
    for (let j = 1; j < rString.length; j++) {
      if (rString[j] >= rString[j-1]) {
        comparator = rString[j-1];
        rString[j-1] = rString[j];
        rString[j] = comparator;
      }
    }
  }
  return rString.join("");
}

function testCases() {
  for (let i = 0; i < 20; i++){
    let number = createRandomNumber();
    console.log(number + " => " + rearrangeNumber(number));
  }
}

testCases();

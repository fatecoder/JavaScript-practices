let number = prompt("Input a number to format");

function formatNumber(number) {
  let formattedNumber = "";
  if (!isNaN(number) && number.length > 3){
    let commaReference = 0;
    for (let i = number.length-1; i>=0; i--){
      formattedNumber = number[i] + formattedNumber;
      if (commaReference == 2 && i != 0){
        formattedNumber = "," + formattedNumber;
        commaReference=0;
      }else{
        commaReference++;
      }
    }
    return formattedNumber;
  }else {
    return number;
  }
}

console.log("Received number: " + number);
console.log("Formatted number: " + formatNumber(number));

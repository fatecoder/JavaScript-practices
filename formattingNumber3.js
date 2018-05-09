let number = prompt("Input a number to format");

function formatNumber(number) {
  let formattedNumber = number.split("");
  if (!isNaN(number) && number.length > 3){
    let commaReference = 0;
    for (let i = number.length-1; i>=0 ; i--){
      if (commaReference == 2 && i != 0){
        formattedNumber.splice(i,0,",");
        commaReference=0;
      }else{
        commaReference++;
      }
    }
    return arrayToString(formattedNumber);
  }else {
    return number;
  }
}

function arrayToString(array){
  let formattedArray = "";
  for (let i = 0; i < array.length; i++){
    formattedArray += array[i];
  }
  return formattedArray;
}

console.log("Received number: " + number);
console.log("Formatted number: " + formatNumber(number));

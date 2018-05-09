let number = prompt("Input a number to format");

function formatNumber(number) {
  let formattedNumber = "";
  if (!isNaN(number) && number.length > 3){
    for (let i = 0; i < (number.length - number.length%3)/3; i++){
      
    }
    return formattedNumber;
  }else{
    return number;
  }
}

console.log("Received number: " + number);
console.log("Formatted number: " + formatNumber(number));

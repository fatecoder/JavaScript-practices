let number = prompt("Input a number to format");

function toFormat(number){
  if (!isNaN(number) && number.length > 3 && number != null){
    let formatNumber = reverse(number);
    number = "";
    for (let i = 0; i < formatNumber.length; i++){
      if (i > 0 && i%3 == 0){
        number += ","+formatNumber[i];
      }else {
        number += formatNumber[i];
      }
    }
    return reverse(number);
  }else{
    return "Is not a valid number";
  }
}

function reverse(data){
  let reversed = "";
  for (let i = data.length-1; i>=0; i--){
    reversed += data[i];
  }
  return reversed;
}

console.log(toFormat(number));

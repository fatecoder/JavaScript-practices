let number = prompt("Input a number");

function findLucky(number) {
  let total = 0;
  for (let i = 0; i < number.length; i++){
    total += number[i];
  }
  console.log("Total: "+total);
  if (total === 0 || total%9 === 0){
    return("Lucky!!!");
  }else{
    return(false)
  }
}

console.log(findLucky(number));

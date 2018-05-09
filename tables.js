let number = prompt("Input a number");

function doTable(number){
  for (let i = 1; i <= 10; i++) {
    console.log(i + " * " + number + " = " + i*number);
  }
}

doTable(number);

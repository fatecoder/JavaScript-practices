let array = [0,2,0,3,4,5,3,5,5];

function removeDuplicated(array){
  let array2 = [];
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      if (!array2.includes(array[i])){
        array2.push(array[i]);
      }
    }
  }
  return array2;
}

console.log(removeDuplicated(array));

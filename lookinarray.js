let array = [2, 5, 5, 0, 3, 4, 0, 5, 5];

function removeDuplicated(array){
  for (let i = 0; i < array.length; i++){
    let counter = 0;
    for (let j = 0; j < array.length; j++){
      if (array[i] == array[j]){
        counter++;
        if (counter > 1){
          array.splice(array.indexOf(array[i]),1);
        }
      }
    }
  }
  return array;
}

function removeAllDuplicated(array){
  for (let i = 0; i < array.length; i++){
    let counter = 0;
    for (let j = 0; j < array.length; j++){
      if (array[i] == array[j]){
        counter++;
        if (counter > 1){
          array.splice(array.indexOf(array[i]),1);
          array.splice(array.indexOf(array[j-1]),1);
        }
      }
    }
  }
  return array;
}

//console.log(removeDuplicated(array));
console.log(removeAllDuplicated(array));

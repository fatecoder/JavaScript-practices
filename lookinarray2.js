let array = [0,2,0,3,4,5,3,5,5];

function checkForDuplicated(array){
  let duplicatedValues = [];
  for (let i = 0; i < array.length; i++){
    let counter = 0;
    for (let j = 0; j < array.length; j++){
      if (array[i] == array[j]){
		counter++;
		if (counter>1 && !duplicatedValues.includes(array[i])){
		  duplicatedValues.push(array[i]);
		}
      }
    }
  }
  return duplicatedValues;
}

function removeDuplicated(array, a){
  let arrayFiltered = [];
  for (let i = 0; i < a.length; i++){
    if (array.includes(a[i])){
      array.filter(function remove(element){return element != a[i]});
    }
  }
  return arrayFiltered;
}

array2 = checkForDuplicated(array);
console.log(removeDuplicated(array, array2));

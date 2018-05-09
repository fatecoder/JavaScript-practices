let array = [45, 11, 15, 12, 10];

function foundSmallest(array){
  let comparator = 0;
  for (let i = 0; i < array.length; i++){
    for (let j = 1; j < array.length; j++){
      if (array[j] <= array[j-1]){
        comparator = array[j-1];
        array[j-1] = array[j];
        array[j] = comparator;
      }
    }
  }
  return array[0];
}

console.log(foundSmallest(array));

let word = prompt();

function invertReverse(word){
  let reversedWord = "";

  for (let i = word.length-1; i >= 0; i--){
    if (word[i] === word[i].toUpperCase()){
      reversedWord += word[i].toLowerCase();
    }else{
      reversedWord += word[i].toUpperCase();
    }
  }
  return(reversedWord);
}

console.log(invertReverse(word));

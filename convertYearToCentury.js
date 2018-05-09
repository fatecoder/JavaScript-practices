let value = prompt();

/*function yearToCentury(value){
  return (value/100)%1!=0 ? (value/100)-((value/100)%1)+1 : (value/100);
}*/

let yearToCentury = (value) => (value/100)%1!=0 ? (value/100)-((value/100)%1)+1 : (value/100);

console.log("year introduced: "+value);
console.log("century: "+yearToCentury(value));

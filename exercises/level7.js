// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"


function finalFunction(num){
   let array = [];
   for(i=0; i < num; i++){
      array.push("string");
   }
   if(i > 0){
      return array;
   }
   return array;
}
console.log(finalFunction(-3));
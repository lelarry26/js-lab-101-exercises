//Create an array that holds the number 1-25. Print out all numbers that divisible by 3.

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] % 3 === 0){
        console.log(numbers[i]);
    }
}

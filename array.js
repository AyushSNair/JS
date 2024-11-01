let fruits = ['apple', 'orange','banana'];

fruits.push('coconut')

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);


// let numOfFruits = fruits.length;
// let index = fruits.indexOf("coconut")
// console.log(numOfFruits)
// console.log(index)

//loop through the elements and display them

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}


//spread operator (..variable)
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);


console.log(maximum);


username = 'Ayush';

arr = [...username];
console.log(arr)

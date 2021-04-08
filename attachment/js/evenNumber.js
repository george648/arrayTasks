// Написать ф-цию, которая принимает объект, где в качестве значений - числа
// Ф-ция должна проверить, есть ли среди значений четные числа и вернуть true/false

function isEvenValue(array) {
    // return array.map(number => number % 2 === 0)
    // return array.filter(number => number % 2 === 0)
    // return array.find(number => {number % 2 === 0})
    // return array.findIndex(number => number % 2 === 0)
};

const simpleArrayNum = [1, 2,3,4,5,6];
const evenNumberArray = [2,4, 6, 8, 10];
const notEvenArrayNumber = [1,3,5,7,9];

console.log(isEvenValue(simpleArrayNum))
console.log(isEvenValue(evenNumberArray));
console.log(isEvenValue(notEvenArrayNumber))
  
//   isEvenValue(obj)
//   isEvenValue(obj1)

// function isEvenValue(obj) {
//   for(let key in obj) {
//     if(obj[key] % 2 === 0) {
//       console.log('this value of obj: ' + obj[key] + ' is even')
//     } else {
//       console.log(false, obj[key])
//     }
//   }
// };

  
// let num = {0:0, 1:1, 2:2, 3:3};
// let num1 = {0:5, 1:1, 2:7, 3:3};
// let num2 = {0:5, 2:1, 4:3, 6:6, 8:8};

// isEvenValue(num)
// isEvenValue(num1)
// isEvenValue(num2)
// isEvenValue(num2)
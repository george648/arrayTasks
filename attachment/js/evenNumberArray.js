// Написать ф-цию, которая принимает объект, где в качестве значений - числа
// Ф-ция должна проверить, есть ли среди значений четные числа и вернуть true/false

function isEvenValue(array) {
    return array.map(number => number % 2 === 0)
    // return array.filter(number => number % 2 === 0)
    // return array.find(number => {number % 2 === 0})
};

const simpleArrayNum = [1, 2,3,4,5,6];
const evenNumberArray = [2,4, 6, 8, 10];
const notEvenArrayNumber = [1,3,5,7,9];

console.log(isEvenValue(simpleArrayNum))
console.log(isEvenValue(evenNumberArray));
console.log(isEvenValue(notEvenArrayNumber))
  
isEvenValue(obj)
isEvenValue(obj1)

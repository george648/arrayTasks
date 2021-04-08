// Написать ф-цию, которая принимает объект, где в качестве значений - числа
// Ф-ция должна проверить, есть ли среди значений четные числа и вернуть true/false

function isEvenValue(objj) {
    if (objj.find(number=> number % 2 === 0)) {
    console.log(true)
    } else {
      console.log(false)
    }
  };
  
  let obj = [1, 3, 5];
  let obj1 = [2, 4, 6];
  
  isEvenValue(obj)
  isEvenValue(obj1)
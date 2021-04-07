// let arr = [1, 2, 3, 4, 5]

// function filterArray(array, power) {
//     let newArray;
//     newArray = array.filter( item => item % 2 === 0);
//     return newArray.map(item => item ** power);
// };

// let num = filterArray(arr, 4);
// console.log(num)

// let object = [
//     {x: 1, z:2, y: 3},
//     {x: 10, z:21, y: 4},
//     {x: 2, z:3, y: 4},
//     {a: 1, b:2}
// ]

// function calculate(array, obj) {
//     return array.reduce((acc, item) => {
//         for (let obj in array) {
            
//         }
//         return acc + item.x
//     }, {})
// };

// let arr = calculate(object)


// =====================================================================================================
// Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// и вторым параметром ключ, по которому надо собрать массив
// понимаю, где что не так... 

let obj = [
	{ name: 'Sergey', age: 33 },
  { name: 'Daria', age: 31 }
]

function getAges(array, key) {
    let newArr;
    return newArr = array.forEach(item => item.key)
};

getAges(obj, age)

// getAges([
// 	{ name: 'Sergey', age: 33 },
//   { name: 'Daria', age: 33 }
// ], 'name') // => ['Sergey', 'Daria']

// getAges([
// 	{ name: 'Sergey', age: 33 },
//   { name: 'Daria', age: 33 }
// ], 'age') // => [33, 33]


//  for (let key in obj) {
//     console.log(obj[key].age)
// }

// obj.forEach(item=>{
//     console.log(item.age)
// })

// =====================================================================================================
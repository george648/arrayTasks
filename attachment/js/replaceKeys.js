// ==========================================================
// Написать ф-цию, которая принимает объект
// И меняет местами ключи и значения

let obj = [
    {name: 'Sergey', age: 33},
    {name: 'Daria', age: 31}
];

// console.log(obj.forEach(item => item.name)); // не работает...

// for (let key in obj) {
    // console.log(obj[key].name)
    // console.log(obj[key])
// }

// console.log(Object.entries(obj))
// console.log(Object.values(obj))

// for (let value of obj) {
//     console.log(value)

// }


function convertObject(obj) {
    return obj.reduce((acc, item) => {
        acc += item
    }, [])
}

console.log(convertObject(obj))

// convertObject({ a: 'b', c: 'd' }) // => { b: 'a', d: 'c' }
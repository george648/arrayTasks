// ==========================================================
// Написать ф-цию, которая принимает объект
// И меняет местами ключи и значения

let obj = [
    {name: 'Sergey', age: 33},
    {name: 'Daria', age: 31}
];

// for (let key in obj) {
    // console.log(obj[key].name)
    // console.log(key)
// }

// console.log(Object.entries(obj))
// console.log(Object.values(obj))

// for (let value of obj) {
    // console.log(value)
    // console.log(obj[value])
// }

function convertObject(obj) {
    obj.forEach(element => {
        let newObj = {};
        let arrKey = [];
        let arrValues = [];
        for(let key in element) {
        arrKey.push(key)
        arrValues.push(element[key])
        for(let i = 0; i < arrKey.length; i++) {
            newObj[arrValues[i]] = arrKey
        }
    } 
    return newObj
    });
};

console.log(convertObject(obj))

// convertObject({ a: 'b', c: 'd' }) // => { b: 'a', d: 'c' }
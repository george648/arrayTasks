// =====================================================================================================
// Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// и вторым параметром ключ, по которому надо собрать массив
// 

function getAges(array, key) {
    let newArr;
    return newArr = array.map(item => item[key])
};

let arr = getAges(obj, 'name')
console.log(arr)

// =====================================================================================================

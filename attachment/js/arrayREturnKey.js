// Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// и возвращает массив значений лежащих в поле age

function getAges (array) {
  console.log(array.map(item => item.age))
};

getAges(obj)
const ages = getAges(obj);
console.log(ages)

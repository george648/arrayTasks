// Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// и возвращает массив значений лежащих в поле age

let obj = [
  {name: 'Sergey', age: 33},
  {name: 'Daria', age: 31}
];

function getAges (array) {
  let newArr = [];
  // console.log(array.map(item => item.age))
  // return newArr.push(array.map(item => item.age))
  return array.map(item => item.age)
};

getAges(obj)
const ages = getAges(obj);
console.log(ages)

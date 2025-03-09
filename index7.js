

//задание 1
let str = 'math';
let strToUpperCase = str.toUpperCase();
console.log(strToUpperCase);

//задание 2
function filterString(arr, str) {
   const result = []
   arr.forEach((product) => {
     
      if (product.toLowerCase().startsWith(str.toLowerCase())) {
         result.push(product);
      }

   });
   return result
}

const products = ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 
   'Груша Конференция'];
   const search = 'молоко';
 console.log(filterString(products, search)); 

//задание 3

console.log(Math.floor(32.58842));

console.log(Math.ceil(32.58842));

console.log(Math.round(32.58842));


//задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//задание 5
function random() {
   return Math.floor(Math.random() * 9 + 1);
}
console.log(random());

//задание 6
function functionRandom(n) {
   let arr =[]
   const length = Math.floor(n/2)

   for(let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random()* n))
   }
   return arr
}
console.log(functionRandom(7));
console.log(functionRandom(12));

//задание 7
// min = 4
// max = 10
function getRandom(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandom(2, 50));

//заданрие 8

let dateNow = new Date();
console.log(dateNow);

//задание 9 

let currentDate = new Date();
currentDate.setDate(currentDate.setDate() + 73)

console.log(currentDate);

//задание 10

function getMyDate(fullDate) {
   const months = ['Января', 'Февраля','Марта', 'Апреля', 'Мая', 'Июня', 'Июля','Августа','Сентября','Октября','Ноября','Декабря'];
   const days = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];
   let myDate = new Date();
   const hours = myDate.getHours().toString().padStart(2, "0");
   const minutes = myDate.getMinutes().toString().padStart(2, "0");
   const seconds = myDate.getSeconds().toString().padStart(2, "0");

   return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]} Время: ${hours} ${minutes} ${seconds}`;

}

console.log(getMyDate())

//задание 11

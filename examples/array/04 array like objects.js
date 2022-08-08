const obj = {
    "0": 42,
    "1": 96,
    "123": 123,
    length: 5
}

const arr = Array.from(obj);
console.log(arr);

//const arr2 = [...obj]; // TypeError: obj is not iterable

// Проверить в консоли браузера
console.log(obj.__proto__);
console.log(arr.__proto__);


// Вызвать метод массива для массивоподобного объекта
// (a) call
// (b) Array.from().filter() 

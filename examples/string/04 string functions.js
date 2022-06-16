let str = 'Hello, world';

// Подстроки
// console.log(str.substring(2, 5));
// console.log(str.slice(2, 5));

// console.log(str.substring(5, 2)); // "исправляет" (меняет местами)
// console.log(str.slice(5, 2)); // пустая строка

// console.log(str.substring(-2, 4)); // отрицательные индексы превращаются в 0
// console.log(str.slice(3, -2)); // отрицательные индексы отсчитываются от конца строки

// console.log(str.split(','));
// console.log(str.split(', '));

// Поиск в строке
// console.log(str.indexOf('l'));
// console.log(str.indexOf('l', 3));
// console.log(str.indexOf('q'));
// console.log(str.lastIndexOf('l'));

// console.log(str.startsWith('He'));
// console.log(str.endsWith('zu'));
// console.log(str.includes('or'));

// Дополнение строк до заданной ширины
console.log('z'.padStart(5));
console.log('z'.padStart(5, '-'));
console.log('z'.padEnd(5));
console.log('z'.padEnd(5, '-'));

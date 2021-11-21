const date = new Date('2021-11-23T15:10:45');

console.log(date.getHours()); // 15
console.log(date.getUTCHours()); // 10

date.setHours(16);

console.log(date.getHours()); // 16
console.log(date.getUTCHours()); // 11

date.setUTCHours(16);

console.log(date.getHours()); // 21
console.log(date.getUTCHours()); // 16

// Дни недели: от 0 (воскресение) до 6 (суббота)

// Методы setX в качестве параметров могут получать более мелкие части времени
// Добавить к дате 2 месяца и 3 недели
date.setMonth(date.getMonth() + 2, date.getDate() + 21);
console.log(date.toLocaleDateString());
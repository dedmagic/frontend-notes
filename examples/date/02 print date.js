const date = new Date('2021-11-23T15:10:45');

console.log(date); // Tue Nov 23 2021 15:10:45 GMT+0500 (Екатеринбург, стандартное время)
console.log(date.toString()); // Tue Nov 23 2021 15:10:45 GMT+0500 (Екатеринбург, стандартное время)
console.log(date.toLocaleString()); // 23.11.2021, 15:10:45

console.log(date.toUTCString()); // Tue, 23 Nov 2021 10:10:45 GMT
console.log(date.toISOString()); // 2021-11-23T10:10:45.000Z

console.log(date.valueOf()); // 1637662245000

console.log(date.toDateString()); // Tue Nov 23 2021
console.log(date.toLocaleDateString()); // 23.11.2021

console.log(date.toTimeString()); // 15:10:45 GMT+0500 (Екатеринбург, стандартное время)
console.log(date.toLocaleTimeString()); // 15:10:45

Intl.DateTimeFormat()

const date = new Date('2021-11-23T15:10:45');

console.log(date.getTime()); // 1637662245000
// Сдвиг на 30 секунд
date.setTime(date.getTime() + 30000);
console.log(date.toISOString()); // 2021-11-23T10:11:15.000Z

// Замеры производительности
const timeStamp = Date.now();

for (let i = 0; i < 1_000_000_000; i++) {
    const x = i ** 2;
}

// Время выполнения кода
console.log(Date.now() - timeStamp);

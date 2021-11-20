// // Текущее время
// const now = new Date();
// console.log(now); // 2021-11-20T06:47:37.347Z - Z указывает на то, что дата выведена в UTC (Universal Coordinated Time, Всемирное Скоординированное Время)
// // В браузере: Sat Nov 20 2021 11:47:47 GMT+0500 (Екатеринбург, стандартное время)

// // Количество милисекунд от начала времён (эпоха UNIX), часто называют "отметкой времени"
// const timeBegin = new Date(0);
// console.log(timeBegin);
// const today0 = new Date(1637661600000);
// console.log(today0);

// // Задание даты в ISO 8601 (строка)
// const today1 = new Date('2021-11-23T15:00:00+05:00');
// const today2 = new Date('2021-11-23T15:00:00');
// console.log(today1);
// console.log(today2);
// // Умеет декодировать строки в других форматах (но не стоит)

// // Задание даты по частям
// // Месяцы нумеруются с нуля!

// // Локальное время
// const date1 = new Date(2023, 10, 23, 15, 0, 0, 0);
// console.log(date1);

// // UTC-время
// // Date.UTC() возращает отметку времени
// const date1utc = new Date(
//     Date.UTC(2023, 10, 23, 15, 0, 0, 0)
// );
// console.log(date1utc);

// // Минимальная форма
// const date2 = new Date(2023, 10, 23); // Время -- полночь
// console.log(date2);

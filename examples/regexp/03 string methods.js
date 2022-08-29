const shakespeare = 'To be, or not to be, that is the question!';
const regexp = /on|no/gi;

// String.prototype.search
const res1 = shakespeare.search(regexp); // flag 'g' ignored
console.log(res1); // 10

const res2 = 'Hello world!'.search(regexp);
console.log(res2); // -1

const res3 = shakespeare.search(/to/i); // flag 'i' used
console.log(res3); // 0

// Параметр-строка преобразуется в объект RegExp

// String.prototype.replace
const res4 = shakespeare.replace(regexp, '42');
console.log(res4); // To be, or 42t to be, that is the questi42!

const res5 = shakespeare.replace(/(to) (be)/gi, '$2 $1'); // Поменять слова местами
console.log(res5); // be To, or not be to, that is the question!

// String.prototype.match
const shakespeare = 'To be, or not to be, that is the question!';
const regexp = /on|no/gi;

// String.prototype.search
const res1 = shakespeare.search(regexp); // flag 'g' ignored
console.log(res1); // 10

const res2 = 'Hello world!'.search(regexp);
console.log(res2); // -1

const res3 = shakespeare.search(/to/i); // flag 'i' used
console.log(res3); // 0

// Примечание: параметр-строка преобразуется в объект RegExp

// // String.prototype.replace
// const res4 = shakespeare.replace(regexp, '42');
// console.log(res4); // To be, or 42t to be, that is the questi42!

// const res5 = shakespeare.replace(/(to) (be)/gi, '$2 $1'); // Поменять слова местами
// console.log(res5); // be To, or not be to, that is the question!

// String.prototype.match with 'g' flag
// const res6 = shakespeare.match(/\w+/g); // Разбиение на слова
// console.log(res6); // ['To', 'be', 'or', 'not', 'to', 'be', 'that', 'is', 'the', 'question']

// String.prototype.match without 'g' flag
// const message = 'Write me to superman@yandex.com. By!';
// const atRegExp = /@/;
// const res7 = message.match(atRegExp);
// console.log(res7);
// /*
// [
//   '@',
//   index: 20,
//   input: 'Write me to superman@yandex.com. By!',
//   groups: undefined
// ]
// */
// console.log(res7[0]);

// // String.prototype.match without 'g' flag and with groups
// const emailRegExp = /(\w+)@(\w+)\.(\w+)/;
// const res8 = message.match(emailRegExp);
// console.log(res8[0]); // superman@yandex.com
// console.log(res8[1]); // superman
// console.log(res8[2]); // yandex
// console.log(res8[3]); // com

// // String.prototype.match without 'g' flag and with naming groups
// const emailRegExpNamingGroups = /(?<user>\w+)@(?<domain2>\w+)\.(?<domain1>\w+)/;
// const res9 = message.match(emailRegExpNamingGroups);
// console.log(res9.groups.user); // superman
// console.log(res9.groups.domain2); // yandex
// console.log(res9.groups.domain1); // com

// // String.prototype.match with 'g' and 'y' (sticky) flags
// const res10 = shakespeare.match(/\w+ /gy);
// console.log(res10); // ['To ']

// const res11 = 'To be or not to be that is the question'.match(/\w+ /gy);
// console.log(res11); // ['To ', 'be ', 'or ', 'not ', 'to ', 'be ', 'that ', 'is ', 'the ', 'question ']

// // String.prototype.match without 'g' and with 'y' and `lastIndex`
// const wordWithSpaceRegExp = /\w+ /y;
// wordWithSpaceRegExp.lastIndex = 7;
// const res12 = shakespeare.match(wordWithSpaceRegExp);
// console.log(res12[0]); // 'or'

// String.prototype.matchAll
// for (let word of shakespeare.matchAll(/\w+ /g)) {
//     console.log(word[0]);
// }
// /*
// To
// or
// not
// to
// that
// is
// the
// */

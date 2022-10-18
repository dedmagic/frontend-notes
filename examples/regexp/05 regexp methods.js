const shakespeare = 'To be, or not to be, that is the question!'

//#region RegExp.prototype.test
// const regexp1 = /be/g;
// let res1 = regexp1.test(shakespeare)
// console.log(res1) // --> true

// regexp1.lastIndex = 20;
// res1 = regexp1.test(shakespeare)
// console.log(res1) // --> false
//#endregion RegExp.prototype.test

const message = 'Write to me at superman@yandex.com. By!'

//#region RegExp.prototype.exec without `g` and without groups
// const atRegExp = /@/
// const res2 = atRegExp.exec(message)
// console.log(res2)
// console.log(res2[0]) // --> @
// /* -->
// [
//   '@',
//   index: 23,
//   input: 'Write to me at superman@yandex.com. By!',
//   groups: undefined
// ]
// */
//#endregion RegExp.prototype.exec without `g` and without groups

//#region RegExp.prototype.exec without `g` and with groups
const emailRegExp = /(\w+)@(\w+)\.(\w+)/
const res8 = emailRegExp.exec(message)
console.log(res8[0]) //--> superman@yandex.com
console.log(res8[1]) //--> superman
console.log(res8[2]) //--> yandex
console.log(res8[3]) //--> com

console.log(res8)
/* -->
[
  'superman@yandex.com',
  'superman',
  'yandex',
  'com',
  index: 15,
  input: 'Write to me at superman@yandex.com. By!',
  groups: undefined
]
*/
//#endregion RegExp.prototype.exec without `g` and with groups

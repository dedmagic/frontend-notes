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
// const emailRegExp = /(\w+)@(\w+)\.(\w+)/
// const res3 = emailRegExp.exec(message)
// console.log(res3[0]) //--> superman@yandex.com
// console.log(res3[1]) //--> superman
// console.log(res3[2]) //--> yandex
// console.log(res3[3]) //--> com

// console.log(res3)
// /* -->
// [
//   'superman@yandex.com',
//   'superman',
//   'yandex',
//   'com',
//   index: 15,
//   input: 'Write to me at superman@yandex.com. By!',
//   groups: undefined
// ]
// */
//#endregion RegExp.prototype.exec without `g` and with groups

//#region RegExp.prototype.exec without 'g' flag and with naming groups
// const emailRegExpNamingGroups = /(?<user>\w+)@(?<domain2>\w+)\.(?<domain1>\w+)/
// const res4 = emailRegExpNamingGroups.exec(message)
// console.log(res4.groups.user) //--> superman
// console.log(res4.groups.domain2) //--> yandex
// console.log(res4.groups.domain1) //--> com
//#endregion RegExp.prototype.exec without 'g' flag and with naming groups

//#region RegExp.prototype.exec with 'g'
const regexp5 = /\w+/g;
// // console.log({ lastIndex: regexp5.lastIndex })

// const res51 = regexp5.exec(shakespeare)
// console.log(res51)
// // console.log({ lastIndex: regexp5.lastIndex })

// const res52 = regexp5.exec(shakespeare)
// console.log(res52)
// // console.log({ lastIndex: regexp5.lastIndex })

// let res53;
// while ((res53 = regexp5.exec(shakespeare)) !== null) {
//   // console.log({ word: res53[0] })
//   console.log({ word: res53[0], lastIndex: regexp5.lastIndex })
// }
//#endregion RegExp.prototype.exec with 'g'

//#region infinity loop - don't run!
// let res6;
// while ((res6 = /\w+/g.exec(shakespeare)) !== null) {
//   console.log({ word: res6[0] })
// }
//#endregion infinity loop

//region Wrong reuse regexp
const words = ['apple', 'book', 'coffee']
const doubleLetters = /(\w)\1/g;
for (let word of words) {
  if (doubleLetters.test(word)) {
    //console.log(word)
    console.log({ word, lastIndex: doubleLetters.lastIndex })
  }
}
//endregion Wrong reuse regexp

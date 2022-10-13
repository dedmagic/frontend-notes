const shakespeare = 'To be, or not to be, that is the question!'

//#region Escape backslashes

// // Слово с последующим пробелом
// const regexp1 = /\w+ /
// const res1 = shakespeare.match(regexp1)
// console.log(res1)
// /* -->
// [
//   'To ',
//   index: 0,
//   input: 'To be, or not to be, that is the question!',
//   groups: undefined
// ]
// */

// const regexp2 = new RegExp('\w+ ')
// const res2 = shakespeare.match(regexp2)
// console.log(res2) // --> null

// const regexp3 = new RegExp('\\w+ ')
// const res3 = shakespeare.match(regexp3)
// console.log(res3)

// /* -->
// [
//   'To ',
//   index: 0,
//   input: 'To be, or not to be, that is the question!',
//   groups: undefined
// ]
// */
//#endregion Escape backslashes

//#region Constructor second parameter
// const regexp4 = new RegExp('\\w+ ', 'gi')
// const res4 = shakespeare.match(regexp4)
// console.log(res4) // -->['To ', 'or ', 'not ', 'to ', 'that ', 'is ', 'the ']
//#endregion Constructor second parameter

//#region RegExp from RegExp
const regexp6 = new RegExp('\\w+ ')
const regexp5 = new RegExp(regexp6, 'g')
const res5 = shakespeare.match(regexp5)
console.log(res5) // -->['To ', 'or ', 'not ', 'to ', 'that ', 'is ', 'the ']

console.log(regexp5) // --> /\w+ /g
const regexp7 = new RegExp(regexp5)
console.log(regexp7) // --> /\w+ /g
//#endregion RegExp from RegExp


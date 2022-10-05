const shakespeare = 'To be, or not to be, that is the question!'
const regexp = /on|no/gi

//#region String.prototype.search
// const res1 = shakespeare.search(regexp) // flag 'g' ignored
// console.log(res1) //--> 10

// const res2 = 'Hello world!'.search(regexp)
// console.log(res2) //--> -1

// const res3 = shakespeare.search(/to/i) // flag 'i' used
// console.log(res3) //--> 0

// // Примечание: параметр-строка преобразуется в объект RegExp
//#endregion String.prototype.search

//#region String.prototype.replace
// const res4 = shakespeare.replace(regexp, '42')
// console.log(res4) // To be, or 42t to be, that is the questi42!

// const res5 = shakespeare.replace(/(to) (be)/gi, '$2 $1') // Поменять слова местами (used groups)
// console.log(res5) // be To, or not be to, that is the question!
//#endregion String.prototype.replace

//#region String.prototype.replace with function
// function replacer(match, group1, group2, index, sourceString) {
//   console.log({
//     match,
//     group1,
//     group2,
//     index,
//     sourceString
//   })
//   return 42
// }

// const res98 = shakespeare.replace(/(to) (be)/gi, replacer)
// console.log(res98)
// /* -->
// {
//   match: 'To be',
//   group1: 'To',
//   group2: 'be',
//   index: 0,
//   sourceString: 'To be, or not to be, that is the question!'
// }
// {
//   match: 'to be',
//   group1: 'to',
//   group2: 'be',
//   index: 14,
//   sourceString: 'To be, or not to be, that is the question!'
// }
// 42, or not 42, that is the question!
// */
//#endregion String.prototype.replace with function

//#region String.prototype.match with 'g' flag
// const res6 = shakespeare.match(/\w+/g) // Разбиение на слова
// console.log(res6) //--> ['To', 'be', 'or', 'not', 'to', 'be', 'that', 'is', 'the', 'question']
//#endregion String.prototype.match with 'g' flag

const message = 'Write to me at superman@yandex.com. By!'

//#region String.prototype.match without 'g' flag and without groups
// const atRegExp = /@/
// const res7 = message.match(atRegExp)
// console.log(res7)
// /* -->
// [
//   '@',
//   index: 23,
//   input: 'Write to me at superman@yandex.com. By!',
//   groups: undefined
// ]
// */
//#endregion String.prototype.match without 'g' flag and without groups

//#region String.prototype.match without 'g' flag and with groups
// const emailRegExp = /(\w+)@(\w+)\.(\w+)/
// const res8 = message.match(emailRegExp)
// console.log(res8[0]) //--> superman@yandex.com
// console.log(res8[1]) //--> superman
// console.log(res8[2]) //--> yandex
// console.log(res8[3]) //--> com
//#endregion String.prototype.match without 'g' flag and with groups

//#region String.prototype.match without 'g' flag and with naming groups
// const emailRegExpNamingGroups = /(?<user>\w+)@(?<domain2>\w+)\.(?<domain1>\w+)/
// const res9 = message.match(emailRegExpNamingGroups)
// console.log(res9.groups.user) //--> superman
// console.log(res9.groups.domain2) //--> yandex
// console.log(res9.groups.domain1) //--> com
//#endregion String.prototype.match without 'g' flag and with naming groups

//#region String.prototype.match with 'g' and 'y' (sticky) flags
const res10 = shakespeare.match(/\w+ /gy)
console.log(res10) //--> ['To ']

const res11 = 'To be or not to be that is the question'.match(/\w+ /gy)
console.log(res11) //--> ['To ', 'be ', 'or ', 'not ', 'to ', 'be ', 'that ', 'is ', 'the ', 'question ']
//#endregion String.prototype.match with 'g' and 'y' (sticky) flags

//#region String.prototype.match without 'g' and with 'y' and 'lastIndex'
// const wordWithSpaceRegExp = /\w+ /y
// wordWithSpaceRegExp.lastIndex = 7
// const res12 = shakespeare.match(wordWithSpaceRegExp)
// console.log(res12[0]) //--> 'or'
//#endregion String.prototype.match without 'g' and with 'y' and 'lastIndex'

//#region String.prototype.match - not found
// const res97 = shakespeare.match('Billy Joel')
// console.log(res97) // --> null
//#endregion String.prototype.match - not found


//#region String.prototype.matchAll
// for (let word of shakespeare.matchAll(/\w+ /g)) {
//     console.log(word[0])
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
//#endregion String.prototype.matchAll

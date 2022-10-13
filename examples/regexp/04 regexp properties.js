const regexp = /\w+ /gi;

console.log(regexp.source)

//#region flags
console.log(regexp.flags)

console.log(regexp.global) // flag 'g'
console.log(regexp.ignoreCase) // flag 'i'
console.log(regexp.multiline) // flag 'm'
console.log(regexp.dotAll) // flag 's'
console.log(regexp.sticky) // flag 'y'
//#endregion flags

console.log(regexp.lastIndex) // read & write
regexp.lastIndex = 10;
console.log(regexp.lastIndex) // read & write

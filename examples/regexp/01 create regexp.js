// new Regexp(...) === /.../
const regexp1 = new RegExp('ol|lo');
console.log(regexp1); // --> /ol|lo/

const regexp2 = /ol|lo/;
console.log(regexp2); // --> /ol|lo/

// flags
const regexp3 = new RegExp('ol|lo', 'gi');
console.log(regexp3); // --> /ol|lo/gi

const regexp4 = /ol|lo/gi;
console.log(regexp4); // --> /ol|lo/gi

// order of flags is not important
const regexp5 = /ol|lo/ig;
console.log(regexp4); // --> /ol|lo/gi

// // lower case only
// const regexp6 = /ol|lo/Gi; // --> SyntaxError: Invalid regular expression flags

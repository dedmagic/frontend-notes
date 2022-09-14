// 01 square brackets
const a = 42
[1, 2, 3].forEach(item => console.log(item))
// TypeError: Cannot read properties of undefined (reading 'forEach')

// 02 round brackets
const b = 42
(123 + 96).toString()
// TypeError: 42 is not a function

// 03 regexp literal
const c = 42
/.l/.test('Hello world')
// SyntaxError: Unexpected token '.'

// 04 unary plus
const d = 42
+'96'.toString()
console.log(d); // --> 4296

// 05 unary minus
const e = 42
-96;
console.log(e); // --> -54

const a = 2 ** 53 - 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);

console.log('--------------------------------');
const b = Number.MAX_SAFE_INTEGER;
console.log(b);

console.log('--------------------------------');
console.log(typeof b);

const x = 1n;
console.log(typeof x);
console.log(x);
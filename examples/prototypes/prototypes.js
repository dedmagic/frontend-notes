// const obj = {
//     a: 42,
//     b: 96,
// }

// console.log(obj.hasOwnProperty('b'));
// console.log(obj.toString());

//#region function-constructor example
const Person = function (name, age) {
    this.name = name;
    this.age = age;
}

const person = new Person('Mark Knopfler', 72);
console.log(person);
//#endregion

//#region function is a object
function sum(a, b) {
    return a + b;
}

sum.description = 'This is a sum of two numbers';
console.log(sum.description);
//#endregion function is a object

console.log(obj.__proto__);
console.log(obj.__proto__);

// const objj = new Object();
// const arr = new Array();
// const str = new String();

// console.log(objj, arr, str);

// const arr = [];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

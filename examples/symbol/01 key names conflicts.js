import obj from './helper.js';

obj.some_comment = "Some comment";
obj["more_comment"] =  "One more comment";

const comment = Symbol();

obj[comment] = "Stop conflicts!";

console.log(`Comment: ${obj[comment]}`);
console.log('-'.repeat(30));

// console.log(Symbol() == Symbol());
// console.log('-'.repeat(30));



console.log(JSON.stringify(obj, null, ' '));
console.log('-'.repeat(30));

for (let key in obj) {
    console.log(key);
}

//console.log(obj.Keys);

console.log('-'.repeat(30));
const id = Symbol('object id');
//obj[id] = 42;

console.log(obj[id]); // => 42
console.log(id); // => Symbol(object id)
console.log(comment);

console.log(obj.Keys);
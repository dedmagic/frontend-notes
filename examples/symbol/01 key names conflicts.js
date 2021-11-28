import obj from './helper.js';

obj.comment = "Some comment";
obj["more_comment"] =  "One more comment";

const comment = Symbol();

obj[comment] = "Stop conflicts!";

console.log(`Comment: ${obj[comment]}`);
console.log('-'.repeat(30));

console.log(comment);
console.log('-'.repeat(30));

console.log(JSON.stringify(obj, null, ' '));
console.log('-'.repeat(30));

for (let key in obj) {
    console.log(key);
}


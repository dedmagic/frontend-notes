const prop_name = Symbol('prop_name');

const obj = {
    prop_s: 'Hello',
    prop_n: 42,
    [prop_name]: 96,
}

const json = JSON.stringify(obj, null, '  ');
console.log(json);


let d = { count: 42 };
console.log(d.length > 0);
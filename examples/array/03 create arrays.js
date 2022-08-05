const arr1 = [];
console.log(arr1);

const arr2 = [1, 2, 3, 4];
console.log(arr2);

const arr3 = new Array(1, 2, 3, 4);
console.log(arr3);

const arr4 = new Array(6);
console.log(arr4);

const arr5 = Array.of(1, 2, 3, 4);
console.log(arr5);

const arr6 = Array.of(6);
console.log(arr6);

const str = 'Hello world!';
const arr7 = Array.from(str);
console.log(arr7);

const set = new Set();
set.add(42);
set.add(96);
set.add(13);

const arr8 = Array.from(set);
console.log(arr8);

const arr9 = Array.from(set, item => item * 2); // Ещё сказать про третий параметр -- контекств выполнения `this`
console.log(arr9);

const arr10 = [...set];
console.log(arr10);

const arr11 = [...str];
console.log(arr11);
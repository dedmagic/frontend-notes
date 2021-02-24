# Деструктуризация
## Массивы
+ Деструктуризация массивов
```javascript
let myArray = [1, 2, 3];
let [a, b, c] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

+ "Shift" нескольких значений (извлечение из массива первых нескольких элементов с одновременным их удалением из массива)
```javascript
let myArray = [1, 2, 3, 4, 5];
let [a, b, c, ...d] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // [4, 5]
```

+ Деструктуризация пары "ключ - значение"
```javascript
const fred = { name: 'Fred', age: 42 };
console.log(Object.entries(fred)); // [ [ 'name', 'Fred' ], [ 'age', 42 ] ]

for (let [key, value] of Object.entries(fred)) {
    console.log(`${key} = ${value}`);
}
// name = Fred
// age = 42
```

## Объекты
+ Получение конкрентых свойств
```javascript
let myObject = { a: 1, b: 2, c: 3, d: 4};
let { b, d } = myObject;
console.log(b); // 2
console.log(d); // 4
```

+ Получение конкрентых свойств и сбор оставшихся в новый Объект
```javascript
let myObject = { a: 1, b: 2, c: 3, d: 4};
let { b, d, ...other } = myObject;
console.log(b); // 2
console.log(d); // 4
console.log(other); // { a: 1, c: 3 }
```

+ 
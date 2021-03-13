# Деструктуризация
## Массивы
+ Деструктуризация всех элементов массива
```javascript
let myArray = [1, 2, 3];
let [a, b, c] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

+ Деструктуризация начальных элементов массива
```javascript
let myArray = [1, 2, 3, 4, 5];
let [a, b, c] = myArray;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

+ Деструктуризация с пропуском элементов
```javascript
let myArray = [1, 2, 3, 4, 5];
let [, , c, , e] = myArray;
console.log(c); // 3
console.log(e); // 5
```

+ Обмен переменных значениями
```javascript
let a = 1, b = 2;
console.log(a, b);

[b, a] = [a, b];
console.log(a, b);
```

+ Разбиение строки на слова
```javascript
let [firstName, surname] = "Phil Collins".split(' ');
console.log(firstName);
console.log(surname);
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

// Деструктуризация пары "ключ - значение": массив
```javascript
const array = ['один', 'два', 'три', 'четыре'];

for(const [index, element] of array.entries()) {
    console.log(`array[${index}] = ${element}`)
}
```

## Объекты
+ Получение конкрентых свойств
```javascript
let myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
let { b, d } = myObject;
console.log(b); // 2
console.log(d); // 4
```

+ Получение свойств с переименованием
```javascript
let myObject = {
   a: 1,
   b: 2,
   c: 3,
   d: 4
};
let { b, d: newName } = myObject;
console.log(b); // 2
console.log(newName); // 4
console.log(d); // ReferenceError: d is not defined
```

+ Значения по умолчанию (можно и для массивов)
```javascript
let myObject = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

let { b, d = 42, e = 96 } = myObject;
console.log(b, d, e); // 2 4 96

//let { b, d = 42, e } = myObject;
//console.log(b, d, e); // 2 4 undefined
```

+ Деструктуризация вложенных объектов (можно и для массивов)
```javascript
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

function displaySummary({ name, scores: { maths = 0, english = 0, science = 0 } }){
    console.log(`Hello, ${name}`);
    console.log(`Your Maths score is ${maths}`);
    console.log(`Your English score is ${english}`);
    console.log(`Your Science score is ${science}`);
}

displaySummary(student);
```

+ Функции: именованные параметры и значения по умолчанию
```javascript
function print_person_bad (name, profession, age, weight) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_bad ('Smith', 'Baker', 50, 60);

function print_person_good ( { name, profession, age, weight }) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_good ( { name: 'Smith', profession: 'Baker', age: 50, weight: 60 });
print_person_good ( { name: 'Smith', age: 50, profession: 'Baker', weight: 60 });

function print_person_very_good ( { name, profession = 'Programmer', age = 18, weight }) {
    console.log(name);
    console.log(profession);
    console.log(age);
    console.log(weight);
    console.log('-----------');
}

print_person_very_good ( { name: 'Smith', age: 50, weight: 60 })
```

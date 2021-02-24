# Прочие параметры (rest)

*Конструкция **rest** может встречаться в двух местах: в списке параметров функции (строго на последнем месте) и в левой части деструктуризации*

+ Функция с переменным числом параметров
```javascript
function doSomething(first, second, ...rest) {
    console.log(first); // Первый аргумент
    console.log(second); // Второй аргумент
    console.log(rest[0]); // Третий аргумент
    console.log(rest[1]); // Четвертый аргумент
    // etc.
}
``` 
Примечание 1: если передать меньше трёх параметров, то `rest` будет пустым массивом  
Примечание 2: в отличие от `arguments`, работает в стрелочных функциях

+ Удаление свойства из объекта (с использованием деструктуризации)
```javascript
const user = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
};

const deletePassword = ({ password, ...rest }) => rest;

const userWithoutPassword = deletePassword(user);
console.log(userWithoutPassword);  //=> { id: 100, name: 'Howard moon' }
```

+ Динамическое удаление свойства (с использованием деструктуризации)
```javascript
let user1 = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
};

const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;

const removePassword = removeProperty('password');
const removeId = removeProperty('id');

const user2 = removePassword(user1);
console.log(user2); //=> { id: 100, name: 'Howard Moon' }

const user3 = removeId(user1);
console.log(user3); //=> { name: 'Howard Moon', password: 'Password!' }
```
+ Добавление свойства, только если оно отсутствует у объекта (дефолтное свойство):
```javascript
let user1 = {
    id: 200,
    name: 'Vince Noir'
};

let user2 = {
    id: 400,
    name: 'Bollo',
    quotes: ["I've got a bad feeling about this..."]
};

const setDefaults = ({ quotes = [], ...object}) => ({ ...object, quotes });

user1 = setDefaults(user1);
console.log(user1);
//=> { id: 200, name: 'Vince Noir', quotes: [] }

user2 = setDefaults(user2);
console.log(user2);
//=> {
//=>   id: 400,
//=>   name: 'Bollo',
//=>   quotes: ["I've got a bad feeling about this..."]
//=> }
```

+ Добавление свойства по условию

Свойство будет добавлено в объект только в том случае, если `password` имеет значение.
```javascript
const user = { id: 100, name: 'Howard Moon' };
const password = 'Password!';
const userWithPassword = {
    ...user,
    id: 100,
    ...(password && { password })
};
console.log(userWithPassword); //=> { id: 100, name: 'Howard Moon', password: 'Password!' }
```

+ Переименование свойства:
```javascript
const user = {
    ID: 500,
    name: "Bob Fossil"
};

const rename_id = ({ ID, ...object }) => ({ id: ID, ...object });

const user2 = rename_id(user);
console.log(user2); //=> { id: 500, name: 'Bob Fossil' }
```

+ Перемещение свойства на первое место:
```javascript
const user = {
    password: 'Password!',
    name: 'Naboo',
    id: 300
};

const organize = object => ({ id: undefined, ...object });

// move id to the first property
const user2 = organize(user);
console.log(user2); //=> { id: 300, password: 'Password!', name: 'Naboo' }
```

+ Перемещение свойства на последнее место:
```javascript
const user = {
    password: 'Password!',
    name: 'Naboo',
    id: 300
};

const organize = ({ password, ...object }) =>
({ ...object, password });

// move id to the first property
const user2 = organize(user);
console.log(user2); //=> { name: 'Naboo', id: 300, password: 'Password!' }
```
# Прочие параметры (rest)
+ Функция с переменным числом параметров
```javascript
function doSomething(first, second, ...rest) {
    console.log(first); // Первый аргумент
    console.log(second); // Второй аргумент
    console.log(rest[0]); // Третий аргумент
    console.log(rest[1]); // Четвертый
    // Etc.
}
``` 
Примечание 1: если передать меньше трёх параметров, то `rest` будет пустым массивом  
Примечание 2: в отличие от `arguments`, работает в стрелочных функциях

+ Удаление свойства из объекта (с использованием деструктуризации)
```javascript
let user = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
};

const deletePassword = ({ password, ...rest }) => rest;

let userWithoutPassword = deletePassword(user);
console.log(userWithoutPassword);  //=> { id: 100, name: 'Howard moon' }
```
+ Динамическое удаление свойства (с деструктуризацией)
```javascript
let user1 = {
    id: 100,
    name: 'Howard Moon',
    password: 'Password!'
};

const removeProperty = prop => ({ [prop]: _, ...rest }) => rest;

const removePassword = removeProperty('password');
const removeId = removeProperty('id');

let user2 = removePassword(user1);
console.log(user2); //=> { id: 100, name: 'Howard Moon' }

let user3 = removeId(user1);
console.log(user3); //=> { name: 'Howard Moon', password: 'Password!' }
```
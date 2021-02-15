# Оператор расширения (spread)
## Массивы
+ Копия массива: `let arrCopy = [...arr]`
+ Слияние массивов: `let unionArr = [...arr1, ...arr2]`
+ Удаление повторяющихся элементов массива с использованием `Set`:
```javascript
const numbers = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7, 7];
const unique_numbers = [...new Set(numbers)];
console.log(unique_numbers); // [1, 2, 3, 4, 5, 6, 7]
```
+ Конструирование массива из другого массива (других массивов) и значений:
```javascript
let firstArray = ["A", "B", "C"];
let secondArray = ["X", ...firstArray, "Y", "Z"];
// вторым массивом будет [ "X", "A", "B", "C", "Y", "Z" ]
```
## Объекты
+ Клонирование объекта: `let objCopy = { ...obj }` (примечание: копия поверхностная; прототип не копируется)
+ Клонирование с добавлением свойства:
```javascript
const user = { id: 100, name: 'Howard Moon'};
const userWithPass = { ...user, password: 'Password!' };

console.log(user); //=> { id: 100, name: 'Howard Moon' }
console.log(userWithPass); //=> { id: 100, name: 'Howard Moon', password: 'Password!' }
```
Пример 2. Добавление нескольких свойств:
```javascript
const partial = { id: 42, name: 'Howard Moon' };
const user = { ...partial, id: 96, password: 'Password!' };

console.log(user); //=> { id: 96, name: 'Howard Moon', password: 'Password!' }
```
Примечание: в случае наличия одинаковых свойств берётся значение последнего из них (в примере `id == 96`)

+ Слияние объектов:
```javascript
const part1 = { id: 42, name: 'Howard Moon' };
const part2 = { id: 96, password: 'Password!' };

const user1 = { ...part1, ...part2 };
console.log(user1); //=> { id: 96, name: 'Howard Moon', password: 'Password!' }
```
+ Изменение иммутабельных объектов путём создания изменённой копии
```javascript
let original = {
    someProperty: "oldValue",
    someOtherProperty: 42
};
let updated = {...original, someProperty: "newValue"};
console.log(updated); // => { someProperty: 'newValue', someOtherProperty: 42 }
```
## Строки
Преобразование строки в массив символов: `let chars = [...str]`
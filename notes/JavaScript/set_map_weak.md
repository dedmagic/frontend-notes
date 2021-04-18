# Set, Map, WeakSet, WeakMap

## Set
Множество, т.е. коллекция уникальных значений

+ объявление пустого множества
```javascript
let set = new Set();
```

+ добавление элементов множества
```javascript
let mark = { name: 'Mark' };
let knopfler = { name: 'Knopfler' };
let cheb = { name: 'Cheb' };
let mami = { name: 'Mami' };

set.add(mark);
set.add(mark);
set.add(knopfler);
set.add(cheb);
set.add(mami);
set.add(cheb);
```

+ получение количества элементов множества
```javascript
console.log(`items: ${set.size}`); // 4
```

+ перебор с помощью `forEach`
```javascript
set.forEach(item => console.log(item));
// { name: 'Mark' }
// { name: 'Knopfler' }
// { name: 'Cheb' }
// { name: 'Mami' }
```

На каждой итерации в коллбек передаётся три параметра: дважды текущий элемент (это сделано для совместимости с `Map`) и всё множество:
```javascript
set.forEach((item1, item2, set) => console.log(item1 === item2, set.size));
// true 4
// true 4
// true 4
// true 4
```

+ удаление элементов
```javascript
set.delete(mami);
```

+ перебор с помощью `for..of`
```javascript
for (let item of set) {
    console.log(item);
}
// { name: 'Mark' }
// { name: 'Knopfler' }
// { name: 'Cheb' }
```

+ проверка вхождения элемента в множество
```javascript
console.log(set.has(mark)); // true
console.log(set.has(mami)); // false
```

+ создание множества из итерируемого объекта
```javascript
const arr = [1, 2, 3, 4, 5, 3, 5, 1];
const set_from_arr = new Set(arr);
console.log(set_from_arr); // Set { 1, 2, 3, 4, 5 }
```

+
```javascript
```

+
```javascript
```

+
```javascript
```

+
```javascript
```

+
```javascript
```

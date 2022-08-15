# Обработка ошибок в JavaScript

## Перехват ошибок

Для перехвата ошибок используется стандартная конструкция `try/catch/finally`:

```js
try {
    ...
} catch {
    ...
} finally {
    ...
}
```
Блоки `catch` и `finally` могут присутствовать оба или только один из них.

## Инструкция `throw`

Для выброса ошибки используется инструкция `throw`, которая в качестве единственного и обязательного параметра принимает значение любого типа.

```js
try {
    throw 'This is error'; // string
} catch (e) {
    console.log(e); // --> This is error
}


try {
    throw 42; // expresion of any type
} catch (e) {
    console.log(e); // --> 42
}

// object as error info
const customError = {
    message: 'Шеф, всё пропало!',
    severity: 100500
}

try {
    throw customError;
} catch (e) {
    console.log(e); // --> { message: 'Шеф, всё пропало!', severity: 100500 }
}
```

Но использовать значения произвольного типа для идентификации ошибки не стоит, т.к. для этих целей есть специальнный тип `Error`:

```js
try {
    throw new Error('This is error');
} catch (e) {
    console.log(e); // --> Error: This is error, затем stacktrace
}
```

Использование объектов этого типа предпочтительнее, потому что в них автоматически фиксируются место ошибки и stacktrace. Наиболее полезные свойства объекта-ошибки: `message`, `name`, `stack`:

```js
try {
    throw new Error('This is error');
} catch (e) {
    console.log(e.message); // --> This is error
    console.log(e.name); // --> ErrorError
    console.log(e.stack);  // --> выводится stacktrace
}
```

## Нюанс с местом ***


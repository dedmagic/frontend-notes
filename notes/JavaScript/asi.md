# ASI (Automatic semicondactor insertion)

## Автоматическая вставка точки с запятой в конце строки

В JavaScript можно опускать точку с запятой в конце строки, т.к. она вставляется автоматически (не физически вставляется, а при синтаксическом анализе считается, что она там есть). Например, следующий код вполне валиден и выполняется:

```js
const a = 42
const b = 42 ** 2
console.log({ b }) // --> { b: 1764 }
```

## Случаи, когда точка с запятой не вставляется

Но! Точка с запятой вставляется не всегда, а только если объединение двух строк приводит к нарушению синтаксиса. Если такого нарушения нет, то точка с запятой вставляться не будет. Это в некоторых случаях может приводить к исключению или неверному выполнению кода:

```js
// 01 square brackets
const a = 42
[1, 2, 3].forEach(item => console.log(item))
// TypeError: Cannot read properties of undefined (reading 'forEach')

// 02 round brackets
const b = 42
(123 + 96).toString()
// TypeError: 42 is not a function

// 03 regexp literal
const c = 42
/.l/.test('Hello world')
// SyntaxError: Unexpected token '.'

// 04 unary plus
const d = 42
+'96'.toString()
console.log(d) // --> 4296

// 05 unary minus
const e = 42
-96;
console.log(e) // --> -54
```
# Регулярные выражения в JavaScript

## Способы создания регулярных выражений

Регулярные выражения в JavaScript можно создавать двумя способами: с помощью функции-конструктора и с помощью литерала

```js
const regexp1 = new RegExp('ol|lo');
console.log(regexp1); // --> /ol|lo/

const regexp2 = /ol|lo/;
console.log(regexp2); // --> /ol|lo/
```

Эти два способа равнозначны, т.е. будет создано одно и то же регулярное выражение.

При создании регулярного выражения могут использоваться флаги, задающие его режим работы:

```js
const regexp3 = new RegExp('ol|lo', 'gi');
console.log(regexp3); // --> /ol|lo/gi

const regexp4 = /ol|lo/gi;
console.log(regexp4); // --> /ol|lo/gi
```

Порядок указания флагов не важен:

```js
const regexp5 = /ol|lo/ig;
console.log(regexp4); // --> /ol|lo/gi
```

В отличие от регистра – флаги должны быть в нижнем:

```js
const regexp6 = /ol|lo/Gi; // --> SyntaxError: Invalid regular expression flags
```

## Строковые методы, использующие регулярные выражения




## Методы типа RegExp

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

Операция `typeof` возвращает для регулярных выражений значение `object`.

## Строковые методы, использующие регулярные выражения

### String.prototype.search

Метод `search` осуществляет поиск подстроки и возвращает её позицию или значение -1, если подстрока не найдена. 

```js
const shakespeare = 'To be, or not to be, that is the question!'
const regexp = /on|no/gi

const res1 = shakespeare.search(regexp) // flag 'g' ignored
console.log(res1) //--> 10

const res2 = 'Hello world!'.search(regexp)
console.log(res2) //--> -1

const res3 = shakespeare.search(/to/i) // flag 'i' used
console.log(res3) //--> 0
```

Примечание 1. Флаг `g` игнорируется, то есть при нескольких совпадениях будет найдено только первое из них.

Примечание 2. Если аргументом является не регулярное выражение, то он будет преобразован в регулярное выражение путём передачи конструктору `RegExp`.


### String.prototype.replace

Осуществляет замену найденной подстроки на указанную подстроку. Если указан флаг `g`, то будут заменены все найденные подстроки.

```js
const res4 = shakespeare.replace(regexp, '42')
console.log(res4) //--> To be, or 42t to be, that is the questi42!
```
В строке замены можно использовать группы из строки поиска. Например, код в следующем примере меняет слова `to` и `be` местами:

```js
const res5 = shakespeare.replace(/(to) (be)/gi, '$2 $1')
console.log(res5) //--> be To, or not be to, that is the question!
```

Примечание 1. Если строка поиска не является регулярным выражением, то она НЕ будет преобразована в регулярное выражение. 

Примечание 2. Если в регулярном выражении используются именованные группы, то строка замены может ссылаться на них по именам, а не номерам.

В качестве второго параметра метод `replace` вместо строки может принимать функцию. Эта функция принимает следующие параметры:
1. Найденную подстроку.
2. По одному параметру на каждую группу в найденной подстроке.
3. Позицию найденной подстроки.
4. Строку, в которой осуществляетя поиск.

Возвращает функция строку замены.

В следующем примере все найденные подстроки переводятся в верхний регистр.

```js
function replacer(match, group1, group2, index, sourceString) {
  console.log({
    match,
    group1,
    group2,
    index,
    sourceString
  })
  return match.toUpperCase()
}

const res98 = shakespeare.replace(/(to) (be)/gi, replacer)
console.log(res98) //--> TO BE, or not TO BE, that is the question!
```

При этом логирование вернёт следующий результат:

```js
{
  match: 'To be',
  group1: 'To',
  group2: 'be',
  index: 0,
  sourceString: 'To be, or not to be, that is the question!'
}
{
  match: 'to be',
  group1: 'to',
  group2: 'be',
  index: 14,
  sourceString: 'To be, or not to be, that is the question!'
}
```

**********************************

## Методы типа RegExp

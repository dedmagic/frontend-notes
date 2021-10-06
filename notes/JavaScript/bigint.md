# Тип BigInt

Максимальное представимое целое число типа `Number` == `2^53 - 1`, его можно получить с помощью свойства `Number.MAX_SAFE_INTEGER`:

```js
const a = 2**53-1;  // Number.MAX_SAFE_INTEGER
console.log(a);     // 9007199254740991
console.log(a + 1); // 9007199254740992
console.log(a + 2); // 9007199254740992
console.log('--------------------------------');
```

## Литералы типа BigInt

Для представления больших целых чисел в JavaScript используется тип `BigInt`.  Литералы этого типа оканчиваются символом `n`:

```js
const b = 9007199254740991n;
console.log(b);      // 9007199254740991n
console.log(b + 1n); // 9007199254740992n
console.log(b + 2n); // 9007199254740993n
console.log(b * 2n); // 18014398509481982n
console.log('--------------------------------');
```

Так же для создания таких чисел можно использовать функцию `BigInt`:

```js
const c = BigInt(654);
console.log(c); // 654n

const d = BigInt("321");
console.log(d); // 321n

const e = BigInt("0x1fffffffffffff");
console.log(e); // 9007199254740991n

const f = BigInt("0b11111111111111111111111111111111111111111111111111111");
console.log(f); // 9007199254740991n
```

Операция `typeof` для данных этого типа возвращает строку "bigint" (внимание на регистр):

```js
console.log(typeof f); // "bigint"
```

## Выражения

В арифметических выражениях нельзя смешивать типы `Number` и `BigInt`, необходимо явное приведение типа:

```js
console.log(1n + 1); // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Для типа BigInt не поддерживается операция "унарный минус":

```js
console.log(+f); // TypeError: Cannot convert a BigInt value to a number
```

При делении округление происходит всегда вниз:

```js
console.log(20 / 3); // 6.666666666666667
console.log(20n / 3n); // 6n
```

Обычные числа и BigInt можно сравнивать друг с другом, при этом равенство между ними возможно только при нестрогом сравнении:

```js
console.log(3n < 2); // false
console.log(42n == 42); // true
console.log(42n === 42); // false
```

С логичиескими операциями `BigInt` ведёт себя так же, как и обычные числа:

```js
if (0n) {
  console.log('then')
} else {
  console.log('else'); // <-- сработает это
}

console.log(!!42n); // true
console.log(!!0n); // false

console.log(0n || 42n); // 42n
console.log(0n && 42n); // 0n

console.log(Boolean(0n)); // false
console.log(Boolean(42n)); // true
```
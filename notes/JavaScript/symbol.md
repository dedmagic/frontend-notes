# Тип `Symbol`

Для использования в качестве ключей (имён свойств) в объектах допустимо в современном JavaScript использовать два типа: `string` и `Symbol`.

Ключи типа `Symbol` позволяют создавать гарантированно уникальные имена свойств, которые не совпадают с уже существующими и не никогда не совпадут с теми, что будут созданы в будущем.
Другими словами, исключение коллизий имён свойств в объектах, над которыми нет полного контроля. 

### Кейс первый

Создание "скрытых" свойств.


### Кейс два

Т.к. в TypeScript используется структурная типизация (в отличие от номинативной в C#), то вполне можно использовать один тип вместо другого, главное, чтобы они совпадали по структуре:

```js
class Boy {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Girl {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let boy: Boy = new Girl('Мерелин Монро');

console.log(boy.name); // => Мерелин Монро
```

В тех случаях, когда структурная типизация мешает, её можно "отключить" с помощью специальных свойств-маркеров типа:

```ts
const BoyType = Symbol();

class Boy {
    name: string;
    [BoyType]: void;

    constructor(name: string) {
        this.name = name;
    }
}

const GirlType = Symbol();

class Girl {
    name: string;
    [GirlType]: void;

    constructor(name: string) {
        this.name = name;
    }
}

let boy: Boy = new Girl('Мерелин Монро'); // => Property '[BoyType]' is missing in type 'Girl' but required in type 'Boy'.ts(2741)
```

### Кейс три

В тип `Symbol` включены так называемые `well known symbols` – предопределённые значения этого типа, с помощью которых задаются имена специальных свойств, используемых в определённых контекстах.

Например, при преобразовании объекта в примитивное значение движок JS ищет у объекта метод с именем `Symbol.toPrimitive`, и если он имеется, то будет использован для преобразования объекта.

Пример. По умолчанию JS не умеет преобразовывать объекты в числа:

```js
const amount = {
    bank: 'Kidalovo Bank Group',
    currensy: 'rub',
    total: 42
}

let tax = amount * 0.13;
console.log(tax); // => NaN

console.log(+amount); // => NaN
```

Если же к объекту добавить метод с именем `Symbol.toPrimitive`, то можно объект преобразовывать в число:

```js
const amount = {
    bank: 'Kidalovo Bank Group',
    currensy: 'rub',
    total: 42,
    [Symbol.toPrimitive](type) {
        if (type === 'number')
        {
            return this.total       
        } 
        return this.valueOf();
    }
}

let tax = amount * 0.13;
console.log(tax); // => 5.46

console.log(+amount); // 42
```

Полный список _хорошо известных символов_ можно посмотреть [здесь](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol#%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D1%8B "well known symbols").


### Дополнительная тема: [Разделяемые символы в глобальном символьном реестре](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol#%D1%80%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8F%D0%B5%D0%BC%D1%8B%D0%B5_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D1%8B_%D0%B2_%D0%B3%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC_%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC_%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80%D0%B5)

// Методы объекта JSON
const obj1 = {
    x: 1,
    y: {
        z: [false, null, ""]
    }
}
console.log(obj1);

const json1 = JSON.stringify(obj1);
console.log(json1);

const obj2 = JSON.parse(json1);
console.log(obj2);

// Преобразование значений при сериализации/десериализации
const obj3 = {
    undefinedProp: undefined,
    nanProp: NaN,
    infinityProp: Infinity,
    minusInfinityProp: -Infinity,
    dateProp: new Date(),
    functionProp: function () { return 42; }
}
console.log('--------------------------------');

const json3 = JSON.stringify(obj3);
console.log(json3);

const obj4 = JSON.parse(json3);
console.log(obj4);

// JSON.stringify серилизует только перечислимые собственные свойства объекта
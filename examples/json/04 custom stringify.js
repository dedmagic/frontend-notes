const obj1 = {
    x: 1,
    y: 2,
    z: 3
}

// const json1 = JSON.stringify(obj1);
// console.log(json1);

// console.log('-'.repeat(20));
// // 1. Перечень подлежащих сериализации полей
// // 2. Порядок полей
// const json2 = JSON.stringify(obj1, ['z', 'y']);
// console.log(json2);

// Функция преобразования
function replacer(key, value) {
    console.log(`${key} --> ${value}`); // Логироввание

    // Первая итерация: обязательно нужно вернуть сам объект
    // if (key === '') {
    //     return value;
    // }

    if (key === 'y') {
        return undefined;
    }
    return `>>> ${value} <<<`;
};

const json3 = JSON.stringify(obj1, replacer);
console.log('-'.repeat(20));
console.log(json3);

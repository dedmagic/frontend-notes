// let jsonStr = '{ "Id": 1, "IsTransferToService": true, "CurrentYearColumnTitle": "Целевые статьи статьи расходов бюджета города Москвы на 2021 год", "NextYearColumnTitle": "Целевые статьи расходов бюджета города Москвы на 2022 год", "CsrMatchingTableRows": [ { "Id": 10, "CurrentYearCsr": { "Id": 11, "Code": "123", "Name": "Наименование ЦСР1" }, "NextYearCsr": { "Id": 12, "Code": "456", "Name": "Наименование ЦСР2" }, "IsMoved": false }, { "Id": 20, "CurrentYearCsr": { "Id": 23, "Code": "789", "Name": "Наименование ЦСР3" }, "NextYearCsr": { "Name" : "Исключена." } "IsMoved": false }, { "Id": 30, "CurrentYearCsr": null, "NextYearCsr": { "Id": 34, "Code": "444", "Name": "Наименование ЦСР4" }, "IsMoved": false }, { "Id": 40, "CurrentYearCsr": { "Id": 45, "Code": "777", "Name": "Наименование ЦСР5" }, "NextYearCsr": { "Id": 46, "Code": "444", "Name": "Перемещена в 444." }, "IsMoved": true } ]}';
// //let jsonStr = '{ "Id": 1, "IsTransferToService": true, "CurrentYearColumnTitle": "Целевые статьи расходов бюджета города Москвы на 2021 год", "NextYearColumnTitle": "Целевые статьи расходов бюджета города Москвы на 2022 год", "CsrMatchingTableRows": [ { "Id": 10, "CurrentYearCsr": { "Id": 11, "Code": "123", "Name": "Наименование ЦСР1" }, "NextYearCsr": { "Id": 12, "Code": "456", "Name": "Наименование ЦСР2" }, "IsMoved": false } ]}';

// let json = JSON.parse(jsonStr);
// console.log(json);



function replacer(key, value) {
    console.log(`${key} === ${value}`);
    // Filtering out properties
    if (typeof value === 'string') {
        return undefined;
    }
    return value;
}

var foo = { foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7 };
console.log(JSON.stringify(foo, replacer));
// '{"week":45,"month":7}'

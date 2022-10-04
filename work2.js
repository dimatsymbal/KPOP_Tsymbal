"use strict";
exports.__esModule = true;
var Category;
(function (Category) {
    Category[Category["BusinessAnalisyst"] = 0] = "BusinessAnalisyst";
    Category[Category["Developer"] = 1] = "Developer";
    Category[Category["Designer"] = 2] = "Designer";
    Category[Category["QA"] = 3] = "QA";
    Category[Category["ScrumMaster"] = 4] = "ScrumMaster";
})(Category || (Category = {}));
function getAllWorkers() {
    var workers = [
        {
            Name: "Ivan",
            surname: "Ivanov",
            available: true,
            salary: 1000,
            category: Category.QA
        },
        {
            Name: "Petro",
            surname: "Petrov",
            available: true,
            salary: 1500,
            category: Category.Developer
        },
        {
            Name: "Vasyl",
            surname: "Vasyliev",
            available: false,
            salary: 1600,
            category: Category.BusinessAnalisyst
        },
        {
            Name: "Evgen",
            surname: "Zhukov",
            available: true,
            salary: 1300,
            category: Category.QA
        },
    ];
    return workers;
}
function getWorkersNamesByCategory(category) {
    var surnames = [];
    var workers = getAllWorkers();
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var worker = workers_1[_i];
        if (worker.category === category) {
            surnames.push(worker.surname);
        }
    }
    return surnames;
}
function logWorkersNames(names) {
    names.forEach(function (name) {
        console.log(name);
    });
}
logWorkersNames(getWorkersNamesByCategory(Category.QA));

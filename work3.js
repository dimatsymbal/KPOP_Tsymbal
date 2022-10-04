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
            category: Category.QA,
            id: 0
        },
        {
            Name: "Petro",
            surname: "Petrov",
            available: true,
            salary: 1500,
            category: Category.Developer,
            id: 1
        },
        {
            Name: "Vasyl",
            surname: "Vasyliev",
            available: false,
            salary: 1600,
            category: Category.Developer,
            id: 2
        },
        {
            Name: "Stepan",
            surname: "Bandera",
            available: true,
            salary: 1000,
            category: Category.QA,
            id: 3
        },
    ];
    return workers;
}
function getWorkerById(id) {
    var workers = getAllWorkers();
    var foundWorker = workers.find(function (worker) {
        return worker.id === id;
    });
    var workerCredentials = {
        name: foundWorker === null || foundWorker === void 0 ? void 0 : foundWorker.Name,
        surname: foundWorker === null || foundWorker === void 0 ? void 0 : foundWorker.surname,
        salary: foundWorker === null || foundWorker === void 0 ? void 0 : foundWorker.salary
    };
    return workerCredentials;
}
getAllWorkers().forEach(function (worker) {
    if (worker.category === Category.Developer) {
        console.log("".concat(worker.Name));
        console.log("".concat(worker.surname));
    }
});
console.log(getWorkerById(1));

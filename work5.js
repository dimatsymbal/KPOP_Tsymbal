console.log("----------");
function createCustomer(name, age, city) {
    console.log("".concat(name, " ").concat(age ? age : "", " ").concat(city ? city : ""));
}
createCustomer("Dima");
createCustomer("Dima", 20);
createCustomer("Dima", 20, "Kyiv");
console.log("----------");
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
            Name: "Evgen",
            surname: "Zhukov",
            available: true,
            salary: 1300,
            category: Category.Designer,
            id: 3
        },
    ];
    return workers;
}
function getWorkersNamesByCategory(category) {
    if (category === void 0) { category = Category.Designer; }
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
console.log(getWorkersNamesByCategory());
console.log("----------");
function logFirstAvailable(workers) {
    if (workers === void 0) { workers = getAllWorkers(); }
    console.log("number of workers: ".concat(workers.length));
    for (var _i = 0, workers_2 = workers; _i < workers_2.length; _i++) {
        var worker = workers_2[_i];
        if (worker.available) {
            console.log(" $(worker .Name} $(worker .surname} is awailable");
            break;
        }
    }
}
logFirstAvailable();
console.log("----------");
function getWorkerById(id) {
    var workers = getAllWorkers();
    var foundWorker = workers.find(function (worker) {
        return worker.id === id;
    });
    return foundWorker;
}
function chechoutWorkers(customer) {
    var workerIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        workerIDs[_i - 1] = arguments[_i];
    }
    var available = [];
    workerIDs.forEach(function (id) {
        var worker = getWorkerById(id);
        if (worker === null || worker === void 0 ? void 0 : worker.available) {
            available.push(worker.Name + " " + worker.surname);
        }
    });
    console.log("Customer: ".concat(customer));
    return available;
}
var myWorkers = chechoutWorkers("Ann", 1, 2, 4);
myWorkers.forEach(function (name) {
    console.log(name);
});

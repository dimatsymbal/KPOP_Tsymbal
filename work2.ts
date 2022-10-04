enum Category {
  BusinessAnalisyst,
  Developer,
  Designer,
  QA,
  ScrumMaster,
}

function getAllWorkers() {
  let workers = [
    {
      Name: "Ivan",
      surname: "Ivanov",
      available: true,
      salary: 1000,
      category: Category.QA,
    },
    {
      Name: "Petro",
      surname: "Petrov",
      available: true,
      salary: 1500,
      category: Category.Developer,
    },
    {
      Name: "Vasyl",
      surname: "Vasyliev",
      available: false,
      salary: 1600,
      category: Category.BusinessAnalisyst,
    },
    {
      Name: "Evgen",
      surname: "Zhukov",
      available: true,
      salary: 1300,
      category: Category.QA,
    },
  ];

  return workers;
}

function getWorkersNamesByCategory(category: Category): Array<string> {
  let surnames: Array<string> = [];
  let workers = getAllWorkers();

  for (let worker of workers) {
    if (worker.category === category) {
      surnames.push(worker.surname);
    }
  }

  return surnames;
}

function logWorkersNames(names: string[]): void {
  names.forEach((name) => {
    console.log(name);
  });
}

logWorkersNames(getWorkersNamesByCategory(Category.QA));

export {};

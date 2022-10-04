console.log("----------");
function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`${name} ${age ? age : ""} ${city ? city : ""}`);
}

createCustomer("Dima");
createCustomer("Dima", 20);
createCustomer("Dima", 20, "Kyiv");

console.log("----------");
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
      id: 0,
    },
    {
      Name: "Petro",
      surname: "Petrov",
      available: true,
      salary: 1500,
      category: Category.Developer,
      id: 1,
    },
    {
      Name: "Vasyl",
      surname: "Vasyliev",
      available: false,
      salary: 1600,
      category: Category.Developer,
      id: 2,
    },
    {
      Name: "Evgen",
      surname: "Zhukov",
      available: true,
      salary: 1300,
      category: Category.Designer,
      id: 3,
    },
  ];

  return workers;
}

function getWorkersNamesByCategory(
  category: Category = Category.Designer
): Array<string> {
  let surnames: Array<string> = [];
  let workers = getAllWorkers();

  for (let worker of workers) {
    if (worker.category === category) {
      surnames.push(worker.surname);
    }
  }

  return surnames;
}

console.log(getWorkersNamesByCategory());

console.log("----------");
function logFirstAvailable(
  workers: {
    Name: string;
    surname: string;
    available: boolean;
    salary: number;
  }[] = getAllWorkers()
): void {
  console.log(`number of workers: ${workers.length}`);

  for (let worker of workers) {
    if (worker.available) {
      console.log(" $(worker .Name} $(worker .surname} is awailable");
      break;
    }
  }
}

logFirstAvailable();

console.log("----------");
function getWorkerById(id: number) {
  let workers = getAllWorkers();
  let foundWorker = workers.find((worker) => {
    return worker.id === id;
  });

  return foundWorker;
}

function chechoutWorkers(customer: string, ...workerIDs: number[]): string[] {
  let available: string[] = [];
  workerIDs.forEach((id) => {
    let worker = getWorkerById(id);
    if (worker?.available) {
      available.push(worker.Name + " " + worker.surname);
    }
  });

  console.log(`Customer: ${customer}`);

  return available;
}

let myWorkers = chechoutWorkers("Ann", 1, 2, 4);

myWorkers.forEach((name) => {
  console.log(name);
});

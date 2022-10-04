function createCustomerID(name: string, id: number): string {
  return name + " " + id;
}
const myID: string = createCustomerID("Ann", 10);
console.log(myID);

let IdGenerator: typeof createCustomerID = (
  name: string,
  id: number
): string => {
  return name + " " + id;
};

IdGenerator = createCustomerID;

console.log(IdGenerator("Roman", 5));
export {};

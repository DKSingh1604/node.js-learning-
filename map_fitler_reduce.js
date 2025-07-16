const users = [
  {
    firstName: "Dev Karan",
    lastName: "Singh",
    age: 22,
  },
  {
    firstName: "Julius",
    lastName: "McCabe",
    age: 10,
  },
  {
    firstName: "D K",
    lastName: "Singh",
    age: 12,
  },
  {
    firstName: "Ram",
    lastName: "Charan",
    age: 92,
  },
  {
    firstName: "Raju",
    lastName: "Rastogi",
    age: 20,
  },
];

const output = users
  .filter((x) => x.age < 30)
  .map((x) => x.firstName);

const ouput = users.reduce(function (acc, curr) {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);
console.log(ouput);

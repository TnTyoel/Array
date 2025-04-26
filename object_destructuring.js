const person = { name :"Alice", age : 25 };
const { name, age } = person;

console.log(name);
console.log(age);

const {name: userName, age: userAge } = person;
console.log(userName);
console.log(userAge);
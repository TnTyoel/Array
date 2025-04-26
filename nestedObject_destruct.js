// // const person1 = {
//     name: "Alice",
//     address: {
//         city: "New York",
//         zip: 10001
//     }
// };

// const { address: {city, zip}} = person1;
// console.log(city);
// console.log(zip);

const person2 = {name2: 'Alice', age2: 25, country: "USA"};
const { name2, ...rest2} = person2;
console.log(name2);
console.log(rest2);
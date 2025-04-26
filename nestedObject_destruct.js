const person1 = {
    name: "Alice",
    address: {
        city: "New York",
        zip: 10001
    }
};

const { address: {city, zip}} = person1;
console.log(city);
console.log(zip)
function displayUser ({ name3, age3}) {
    console.log(`Name: ${name3}, Age: ${age3}`);
}

const user3 = { name3: "Bob", age3: 28};
displayUser(user3);

function sum([a, b]) {
    return a + b;
}

console.log(sum([5, 10]));


function greet({ name = "Guest"} = {}) {
    console.log(`Hello, ${name}`);
}

greet();
greet({name: "Alice" });
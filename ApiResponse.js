const response = {
    user5: {id: 1, name5: "John"},
    token: "abc123"
};

const { user5: {name5}, token} = response;
console.log(name5);
console.log(token);
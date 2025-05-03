//String method with RegExp
console.log("abc123xyz".match(/\d+/));
console.log("hello world". replace(/world/," JS"));
console.log("hello1hello2hello3" .split(/\d/));
console.log(/\d/.test("abc123"));

//Validate Email
const emailRegex =
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("test@example.com"));
console.log(emailRegex.test("invalid@com"));
const user = {
    "name": "John",
    "age": 20,
    "is_male": true,
}

console.log(user);
console.log("Age = " + user.age);

console.error("Aici este o eroare");

console.log(Math.random());
console.log(Date.now());


const getCurrentShell = () => process.env.SHELL;

console.log(getCurrentShell());
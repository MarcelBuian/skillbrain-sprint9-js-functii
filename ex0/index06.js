
// Un exemplu de map poate fi afisand datele fiecarui user:
console.log("map cu numele functiei");
const displayUser = (user) => {
    console.log(`User nume ${user.name}, varsta ${user.age}`);
}
users.map(displayUser);

console.log("map cu functie anonima clasica");
// Poate fi scrisa si fara declararea functiei:
//  var 1: functie clasica
users.map(function (user) {
    console.log(`User nume ${user.name}, varsta ${user.age}`);
});

console.log("map cu functie anonima arrow");
//  var 2: functie anonima arrow
users.map((user) => {
    console.log(`User nume ${user.name}, varsta ${user.age}`);
});

console.log("map cu functie anonima arrow fara corp");
// var 3: functie anonima arrow dar fara corp
users.map((user) => console.log(`User nume ${user.name}, varsta ${user.age}`));

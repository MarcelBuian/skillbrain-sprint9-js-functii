// Filtreaza o lista de useri si pastreaza doar majoratii
const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
    { name: 'Radu', age: 20 },
];

// Metoda 1: functia cu metoda clasica:
const getAdultUsers = (obiecte) => {
    const userList1 = [];
    for (item of obiecte) {
        if (item.age >= 18) {
            userList1.push(item);
        }
    }

    return userList1;
}

const adultUsers1 = getAdultUsers(users);
console.log("users: ", users);
console.log("Adult users var1:", adultUsers1);


// Metoda 2: functia cu metoda filter

const isAdult1 = (user) => {
    if (user.age >= 18) {
        return true;
    } else {
        return false;
    }
}
const isAdult2 = (user) => {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
const isAdult3 = (user) => {
    return user.age >= 18 ? true : false;
}
const isAdult4 = (user) => {
    return user.age >= 18;
}
const adultUsers2 = users.filter(isAdult4);
console.log("users: ", users);
console.log("Adult users var2:", adultUsers2);

// Metoda 2b: fucntia cu metoda filter intr-o singura linie (functie anonima):

console.log("users: ", users);
const adultUsers2b = users.filter((user) => user.age >= 18);
console.log("Adult users var2b:", adultUsers2b);

// const listaDeNumere = [4, 6, 3, 1, 9];
// const listaOrdonata = listaDeNumere.sort();
// console.log(listaOrdonata);




const sortByAge = (obj1, obj2) => {
    if (obj1.age < obj2.age) {
        return -1;
    }
    if (obj1.age > obj2.age) {
        return 1;
    }
    return 0;
}

const sortByAgeReversed = (obj1, obj2) => {
    return -sortByAge(obj1, obj2);
}

const usersOriginal = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
];

const usersSortat = [...usersOriginal].sort(sortByAge);

const usersReversatVar1 = [...usersSortat].reverse();
const usersReversatVar2 = [...usersOriginal].sort(sortByAgeReversed);



console.log("usersOriginal: ", usersOriginal);
console.log("usersSortat: ", usersSortat);
console.log("usersReversatVar1: ", usersReversatVar1);
console.log("usersReversatVar2: ", usersReversatVar2);
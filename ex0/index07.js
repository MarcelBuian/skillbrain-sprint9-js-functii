// Extrage varsta tuturor obiectelor din lista de utilizatori si pune-le intr-o lista
const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
];

// Metoda 1: clasic
const ageList1 = [];
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    ageList1.push(user.age);
}
console.log("AgeList Var1 = ", ageList1);


// Metoda 2: functia reduce
const valoareaInitiala = [];
const extrageVarsta = (varstele, user) => {
    varstele.push(user.age);
    return varstele;
    // return [...varstele, user.age]
}
const ageList2 = users.reduce(extrageVarsta, valoareaInitiala);
console.log("AgeList Var2 = ", ageList2);


// Metoda 3: functia reduce intr-o linie (folosind callback anonim)
// const ageList3 = users.reduce((varstele, user) => {
//     return [...varstele, user.age]
// }, []);

const ageList3 = users.reduce((varstele, user) => [...varstele, user.age], []);
console.log("AgeList Var3 = ", ageList3);


// Explicatia ageList3 in mai multe randuri
const ageList =
    users.reduce(
        (varstele, user) => [...varstele, user.age],
        []
    )
    ;
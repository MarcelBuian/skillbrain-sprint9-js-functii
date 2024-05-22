// Exemplu mai simplu, fara callback
const myMap = (collection) => {
    const result = [];
    for (const item of collection) {
        // Apelarea funcție callback
        const newItem = ridicareLaPatrat(item);
        // Inserarea valorii în array-ul result
        result.push(newItem);
    }

    return result;
};

const numbers = [5, 2, 3];
const ridicareLaPatrat = (number) => number ** 2;
const newNumbers = myMap(numbers);
// => [25, 4, 9]
console.log(newNumbers);

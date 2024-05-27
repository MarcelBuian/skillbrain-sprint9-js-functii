// **Product rezolvă exercițiile într-un mediu de programare la alegere (ex. Replit, VS Code)**  **și încarcă codul pe Replit.**
// **1. Scrieți o funcție care returnează pătratul unui număr**
// Funcția `findSquare(num)` returnează pătratul numărului primit ca date de intrare (este transmis ca argument în apelul funcției).
// Exemplu 1:
// `Input: num = 6`
// `Output: 36`
// Exemplu 2:
// `Input: num = 0`
// `Output: 0`
// Exemplu 3:
// `Input: num = -12`
// `Output: 144`
//..................................................................................................................................

console.clear()

function verifyNumber(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw "Error: Input must be a number";
    }

    return true;
}

function getTheSquareOfInput1(number) {
    verifyNumber(number);
    return number = number ** 2;
}
console.log("\nCase1 simple function to return square of number: \n")
try {
    console.log("The square of input is: " + getTheSquareOfInput1("a") + '\n\n')
} catch (message) {
    console.error("An error occured: " + message);
}

// compressed version of arrow function with if conditional
const theSquareOfInput2 = (number1) => verifyNumber(number1) && number1 ** 2;
console.log("\nCase2 compressed arrow function to return square of number: \n")
console.log("The square of input is: " + theSquareOfInput2(3) + '\n\n')


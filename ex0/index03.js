const getMaxNumberOfElementsWithList = (lista) => {
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (max < lista[i]) {
            max = lista[i];
        }
    }

    return max;
}

const getMaxNumberOfElementsWithUndefinedNumberOfParameters = (...lista) => {
    return getMaxNumberOfElementsWithList(lista);
}

const maxNumber1 = Math.max(1, 30, 4);
const maxNumber2 = getMaxNumberOfElementsWithUndefinedNumberOfParameters(1, 30, 4, 3, 5);
const lista = [1, 30, 4, 3, 5];
const maxNumber3 = getMaxNumberOfElementsWithList(lista);

console.log(maxNumber1);
console.log(maxNumber2);
console.log(maxNumber3);
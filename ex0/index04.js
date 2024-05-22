function setName(object, prenume, nume) {
    object.prenume = prenume;
    object.nume = nume;
}

function getName(object) {
    return object.nume + ' ' + object.prenume;
}

function displayName(object) {
    console.log("The name is " + getName(object));
}

const student = {
    prenume: "Radu",
    nume: "Tanasa",
}

displayName(student);

setName(student, "Ana-Maria", "Andrei");
displayName(student);

setName(student, "Daniel", "Paraschiv");
displayName(student);
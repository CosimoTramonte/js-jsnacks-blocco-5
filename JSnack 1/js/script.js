
const utenti = [
    {
        nome: "Ugo",
        cognome: "De Ughi",
        age: 65,
    },
    {
        nome: "Mario",
        cognome: "Rossi",
        age: 80,
    },
    {
        nome: "Giuseppe",
        cognome: "Verdi",
        age: 75,
    },
    {
        nome: "GianPaolo",
        cognome: "Azzurri",
        age: 10,
    },
    {
        nome: "Domenico",
        cognome: "Gialli",
        age: 15,
    },
    {
        nome: "Gianvito",
        cognome: "Bianchi",
        age: 30,
    },
    {
        nome: "Francesco",
        cognome: "Neri",
        age: 18,
    },
    {
        nome: "PierPaolo",
        cognome: "Arancioni",
        age: 35,
    }
]

console.log("tutti gli utenti",utenti);

//adesso prendo solo i maggiorenni con formula estesa
/*const maggiorenni = utenti.filter((utente) => {
    if(utente.age <= 18){
        return true
    }

    return false
})*/

//stessa formula ma contratta con arrow function
const maggiorenni = utenti.filter((utente) => (utente.age <= 18))

console.log(maggiorenni);

//adesso prendo solo gli over 65 con formula estesa
/*const over65 = utenti.filter((utente) => {
    if(utente.age >= 65){
        return true
    }

    return false
})*/

//stessa formula ma contratta con arrow function
const over65 = utenti.filter((utente) => (utente.age >= 65))

console.log(over65);
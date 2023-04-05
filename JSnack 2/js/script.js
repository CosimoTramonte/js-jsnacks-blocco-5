
const studenti = [
    {
        nome: "Ugo",
        cognome: "De Ughi",
        numeroMatricola: 213489,
        voti:
            {
                matematica: 8,

                fisica: 8,

                storia: 2,

                italiano: 1,
            },

    },  
    {
        nome: "Mario",
        cognome: "Rossi",
        numeroMatricola: 465812,
        voti:
            {
                matematica: 10,

                fisica: 9,

                storia: 8,

                italiano: 8,
            },
    },
    {
        nome: "Giuseppe",
        cognome: "Verdi",
        numeroMatricola: 450908,
        voti:
            {
                matematica: 9,

                fisica: 7,

                storia: 3,

                italiano: 2,
            },
    },
    {
        nome: "GianPaolo",
        cognome: "Azzurri",
        numeroMatricola: 123987,
        voti:
            {
                matematica: 2,

                fisica: 2,

                storia: 8,

                italiano: 10,
            },
    },
    {
        nome: "Domenico",
        cognome: "Gialli",
        numeroMatricola: 461945,
        voti:
            {
                matematica: 8,

                fisica: 8,

                storia: 8,

                italiano: 7,
            },
    },
    {
        nome: "Gianvito",
        cognome: "Bianchi",
        numeroMatricola: 313198,
        voti:
            {
                matematica: 4,

                fisica: 3,

                storia: 3,

                italiano: 2,
            },
    },
    {
        nome: "Francesco",
        cognome: "Neri",
        numeroMatricola: 456901,
        voti:
            {
                matematica: 10,

                fisica: 10,

                storia: 10,

                italiano: 10,
            },
    },
    {
        nome: "PierPaolo",
        cognome: "Arancioni",
        numeroMatricola: 120065,
        voti:
            {
                matematica: 9,

                fisica: 9,

                storia: 2,

                italiano: 7,
            },
    }
]

console.log(studenti);


const studentiRemap = studenti.map((studente) => {

    const studenteRemap = {
        nome: studente.nome,
        cognome: studente.cognome,
        numeroMatricola : studente.numeroMatricola,
        mediaVoti: media(studente.voti),
    }
    return studenteRemap
})

console.log(studentiRemap);

//------- function -------------
function media(voti) {

   let total = 0;
   for (let key in voti){
        const valore = voti[key];

        total += valore 
    }

    let media = 0
    media = (total / 4).toFixed(2)

    return media
}
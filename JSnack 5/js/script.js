
const biciclette =[
    {
        nome: "rossa",
        peso:"4 kg",
    },
    {
        nome: "bianchi",
        peso:"2 kg",
    },
    {
        nome: "verdi",
        peso:"3 kg",
    },
    {
        nome: "gialli",
        peso:"5 kg",
    },
    {
        nome: "neri",
        peso:"9 kg",
    },
    {
        nome: "azzurri",
        peso:"6 kg",
    },
    {
        nome: "arancioni",
        peso:"1 kg",
    },
]

const arrayPeso = [];

biciclette.forEach( bicicletta => {
    const {nome, peso} = bicicletta
    console.log(nome,parseInt(peso));
    arrayPeso.push(parseInt(peso))    
})


// Qui utilizzo la funzione Math.min per trovare nell'array il numero più piccolo
let leggerissima = Math.min(...arrayPeso)
console.log(leggerissima);

// qui utilizzo 
const min = arrayPeso.reduce((a, b) => Math.min(a, b))
console.log(min)
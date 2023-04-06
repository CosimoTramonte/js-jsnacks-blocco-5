const table = document.querySelector("table")
const bodytable = document.createElement("tbody");
const headTable = document.createElement("thead");

const squadre = [
    {
        nome: "Milan",
        puntifatti: "0",
        fallisubiti: "0",
    },
    {
        nome: "Inter",
        puntifatti: "0",
        fallisubiti: "0",
    },
    {
        nome: "Juve",
        puntifatti: "0",
        fallisubiti: "0",
    },
    {
        nome: "Roma",
        puntifatti: "0",
        fallisubiti: "0",
    },
    {
        nome: "Lazio",
        puntifatti: "0",
        fallisubiti: "0",
    },
    {
        nome: "Bari",
        puntifatti: "0",
        fallisubiti: "0",
    },
    {
        nome: "Napoli",
        puntifatti: "0",
        fallisubiti: "0",
    },
    {
        nome: "Lecce",
        puntifatti: "0",
        fallisubiti: "0",
    },
]

const arraySquadre = [];


const squadreMap = squadre.map( squadra => {

    const squadraMap = {
        nome: squadra.nome,
        puntifatti: getRandomPuntiFatti(0, 60),
        fallisubiti: getRandomFalliSubiti(0, 200),
    }

    return squadraMap
})

headTable.innerHTML = `
    <tr>
        <th scope="col">Nomi</th>
        <th scope="col">Punti Fatti</th>
        <th scope="col">Falli Subiti</th>
    </tr>
`

table.append(headTable)

squadreMap.forEach(squadra => {
    bodytable.innerHTML +=   ` 
        <tr>
        <th scope="row">${squadra.nome}</th>
        <td>${squadra.puntifatti}</td>
        <td>${squadra.fallisubiti}</td>
        </tr>
    ` 
    table.append(bodytable)
})

console.log(squadreMap);

squadreMap.forEach( squadraMap =>{
    
    const {nome,fallisubiti} = squadraMap
    arraySquadre.push(nome,fallisubiti)
    
})


console.log(arraySquadre);





//------------ FUNCTION -------------------

function getRandomPuntiFatti(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}

function getRandomFalliSubiti(min, max){
    return Math.floor(Math.random() * (max - min +1) + min);
}


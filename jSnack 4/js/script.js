const container70 = document.querySelector('.container70');
const container120 = document.querySelector('.container120');
const containernomi = document.querySelector('.containernomi');

const classe = [
    {
        id: "213",
        name: "Marco della Rovere",
        grades: "78",
    },
    {
        id: "110",
        name: "Paola Cortellessa",
        grades: "96",
    },
    {
        id: "250",
        name: "Andrea Mantegna",
        grades: "48",
    },
    {
        id: "145",
        name: "Gaia Borromini",
        grades: "74",
    },
    {
        id: "196",
        name: "Luigi Grimaldello",
        grades: "68",
    },
    {
        id: "102",
        name: "Piero della Francesca",
        grades: "50",
    },
    {
        id: "120",
        name: "Francesca da Polenta",
        grades: "84",
    },
]

//1.
const newCourse = classe.map((studente) =>{

    const studenteNome = {
        nome : studente.name.toUpperCase()
    }
    return studenteNome
})

console.log(newCourse);

//2.
const superior70 = classe.filter((studente) => studente.grades >= 70)
console.log(superior70);

//3.
const superiorId120 = classe.filter((studente) => studente.id >= 120)
console.log(superiorId120);

//stampo

for(let studente of newCourse){

    containernomi.innerHTML += `           
    <div class="card m-2">
        <div class="card-body">
            <h4>nome: ${studente.nome}</h4>
        </div>
    </div>
`;
}

for(let studente of superior70){

    container70.innerHTML += `           
            <div class="card m-2">
                <div class="card-body">
                    <h4>nome: ${studente.name}</h4>
                    <h4>id: ${studente.id}</h4>
                    <h4>grades: ${studente.grades}</h4>
                </div>
            </div>
        `;
}

for(let studente of superiorId120){

    container120.innerHTML += `           
            <div class="card m-2">
                <div class="card-body">
                    <h4>nome: ${studente.name}</h4>
                    <h4>id: ${studente.id}</h4>
                    <h4>grades: ${studente.grades}</h4>
                </div>
            </div>
        `;
}
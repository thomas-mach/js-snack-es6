console.log('js')

// Snack 1 //

const vips = [ 
'Brad Pitt',
'Johnny Depp',
'Lady Gaga',
'Cristiano Ronaldo',
'Georgina Rodriguez',
'Chiara Ferragni',
'Fedez',
'George Clooney',
'Amal Clooney',
'Maneskin'
]

vipsOrder = []
for (let i = 0; i < vips.length; i++){
    let vip = {
        nomeTavolo: 'Tavolo VIP',
        nomeOspite: vips[i],
        posto: i + 1 
    }
vipsOrder.push(vip)
// console.log(vip)
}
// console.log(vipsOrder)


// Snack 2 //

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48 
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74 
    },
    {
        id: 196,
        name: 'Luigi Grmaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
]
const topStudents = []
const idStudents = []
for (let i = 0; i < students.length; i++){
    students[i].name = students[i].name.toUpperCase()
    if (students[i].grades > 70)
    topStudents.push(students[i])
    if (students[i].grades > 70 && students[i].id > 120)
    idStudents.push(students[i])
}

// const topStudents = students.map((el) => {
//     return {
//     name: el.name.toUpperCase()
//     }
// }) 

// console.log(topStudents)
// console.log(idStudents)


// Snack 3 //

function getBike(brand, weight){
    return{
        brand: brand, 
        weight: weight
    }
}

const bikes = [
getBike('Trek', 16),
getBike('GT', 18),
getBike('YT', 17),
getBike('Comencial', 19),
getBike('Spezialized', 9),
getBike('Cinelli', 13),
getBike('NukeProof', 11)
]

let minWeight = bikes[0].weight
let minWeightIndex = 0

for(let i = 0; i < bikes.length; i++){
   
    if (bikes[i].weight < minWeight){
        minWeight = bikes[i].weight
        minWeightIndex = i
    }
}

console.log(minWeight)
console.log(minWeightIndex)
console.log(bikes[minWeightIndex].brand)

//Snack 4//

function number(min, max){
    const num = parseInt(Math.floor(Math.random() * (max - min) + min))
    return num
}


function getTeam(team, points, fall){
    return{
        team: team,
        points: points,
        fall: fall
    }
}

const teams = [
    getTeam('Roma', number(0, 100), number(0, 50)),
    getTeam('Milan', number(0, 100), number(0, 50)),
    getTeam('Lazio', number(0, 100), number(0, 50)),
    getTeam('Inter', number(0, 100), number(0, 50)),
    getTeam('Padova', number(0, 100), number(0, 50)),
    getTeam('Bologna', number(0, 100), number(0, 50))
    
]

const fallsArray = []

for(let j = 0; j < teams.length; j++){
    
    const {
        team,
        points,
        fall
    } = teams[j]

    const falls = {
        team,
        fall
    }
    
    fallsArray.push(falls)

}
console.log(fallsArray)



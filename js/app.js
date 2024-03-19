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
console.log(vip)
}
console.log(vipsOrder)


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

console.log(topStudents)
console.log(idStudents)

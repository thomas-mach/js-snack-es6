console.log('js')

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

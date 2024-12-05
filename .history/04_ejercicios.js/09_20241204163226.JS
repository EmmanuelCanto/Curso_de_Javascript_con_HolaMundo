

let pares = [
[1, { name: "Nicolas" }],
[2, { name: "Felipe" }],
[3, { name: "Chanchito" }],
]


let array = [{
    id:1,
    name: 'Nicolas'
},
{
    id:2,
    name: 'Felipe'
},
{
    id:3,
    name:'Chanchito'
}
]


function toPairs(arr){
let pares = {}
for (let prop in arr){
    let elemento = arr[prop]
    pares[prop] = {'name': elemento.name, id: elemento.id}
    
}
return pares
}

console.log(toPairs(array))





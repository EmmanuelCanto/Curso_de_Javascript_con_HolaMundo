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

let pares = [
    [1, { id:1, name: "Nicolas" }],
    [2, { id:2, name: "Felipe" }],
    [3, { id:3, name: "Chanchito" }],
]

function toPairs(arr){
    let pares = 0
    for (let prop in arr){
        console.log(prop, arr[prop])
        pares += pares[prop.id, {id: prop.id, name: prop.name}]
    }
    return pares
}

toPairs(array)





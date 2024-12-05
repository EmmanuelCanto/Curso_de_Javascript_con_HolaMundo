
let array = [2,5,7,15,-5,-100,55]

function cuantosPositivos(array){
    let positivos = []
    for (num of array){
        num > 0 ? positivos.push(num) : ''
    }
    return positivos.length
}

console.log(cuantosPositivos(array)) 
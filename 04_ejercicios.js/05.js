
let array = [2,5,6,15,-5,-100,55]

function getMenorMayor(arr){
    numMayor = 0
    numMenor = 0
    for ( let num of arr) {
        num > numMayor ? numMayor = num : ''
        num < numMenor ? numMenor = num : ''
    }
    return [numMenor, numMayor]
    
}

let numeros = getMenorMayor(array)

console.log(numeros)
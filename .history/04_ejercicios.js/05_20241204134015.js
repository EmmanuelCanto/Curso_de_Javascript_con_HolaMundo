
let array = [2,5,6,15,-5,-100,55]

function getMenorMayor(arr){
    i = 0
    numMayor = 0
    numMenor = 0
    while (array.length <= i){
        array[i]>numMayor ? numMayor = array[i]
        i++
    }
}

let numeros = getMenorMayor()

console.log(numeros)
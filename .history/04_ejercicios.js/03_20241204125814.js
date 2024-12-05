

function getByindx(arr, indx){
    if(arr.length > indx && indx >= 0){
        return arr[indx]
    }
}

let resultado = getByindx([1,2], 1)
console.log("El resultad del array es: " . resultado)
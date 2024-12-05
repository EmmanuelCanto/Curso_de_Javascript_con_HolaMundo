

function getByindx(arr, indx){
    if(arr.length > indx && indx >= 0){
        return arr[indx]
    }
}

let resultado = getByindx([1,2], 2)
console.log(resultado)
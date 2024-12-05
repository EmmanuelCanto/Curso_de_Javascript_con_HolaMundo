

function getByindx(arr, indx){
    if(arr.length > indx && indx >= 0){
        return arr[indx]
    }else{
        return "no valido"
    }
}

let resultado = getByindx([1,2], 10)
console.log(resultado)
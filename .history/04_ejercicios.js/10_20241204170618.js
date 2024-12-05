function crearArray(n){
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr[i] = i
    }
    return arr
}

console.log(crearArray(4))
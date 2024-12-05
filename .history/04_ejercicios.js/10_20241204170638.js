function crearArray(n){
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr[i] = i+1
    }
    return arr
}

console.log(crearArray(4))
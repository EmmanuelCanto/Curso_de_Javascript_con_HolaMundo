function crearArray(n){
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr[i] = i+i
    }
    console.log(arr)
}

crearArray(4)
function crearArray(n){
    for (let i = 0; i <= n; i++) {
        i[i.length] = i
    }
    return i
}

console.log(crearArray(4))
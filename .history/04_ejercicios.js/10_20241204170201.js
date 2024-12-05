function crearArray(n){
    for (let i = []; i <= n; i++) {
        i[i.length] = i
    }
    return i
}

console.log(crearArray(4))
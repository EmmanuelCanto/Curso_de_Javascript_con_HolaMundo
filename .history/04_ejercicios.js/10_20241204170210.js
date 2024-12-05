function crearArray(n){
    for (let i = []; i.length <= n; i++) {
        i[i.length] = i
    }
    return i
}

console.log(crearArray(4))
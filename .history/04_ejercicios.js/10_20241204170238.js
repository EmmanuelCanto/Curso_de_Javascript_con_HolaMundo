function crearArray(n){
    for (let i = []; i.length <= n; i++) {
        i[i.length] = i
    }
    console.log(i)
}

console.log(crearArray(4))
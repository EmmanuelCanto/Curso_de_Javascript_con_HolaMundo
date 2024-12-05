function crearArray(n){
    let i = []
    contador = 1
    while (contador <= n) {
        i[i.length] = contador
        contador++
    }
    return i
}

console.log(crearArray(4))
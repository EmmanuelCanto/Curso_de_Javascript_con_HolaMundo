function crearArray(n){
    let i = []
    contador = 0
    while (contador < n) {
        i[i.length] = contador
        contador++
    }
    return i
}

console.log(crearArray(4))
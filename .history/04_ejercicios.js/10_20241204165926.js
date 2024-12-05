function crearArray(n){
    let i = []
    contador = 0
    while (contador < n) {
        i[i.length] = 0
        contador++
    }
    return contador
}

console.log(crearArray(4))
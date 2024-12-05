const punto = {
    x: 10,
    y: 15,
    dibujar (){
        console.log('Dibujando...')
    }
}

// delete punto.dibujar
if ('dibujar' in punto){
    punto.dibujar()
}

console.log(Object.keys(punto))

for (let llave OF Object.keys(punto)){
    console.log(llave, punto[llave])
}
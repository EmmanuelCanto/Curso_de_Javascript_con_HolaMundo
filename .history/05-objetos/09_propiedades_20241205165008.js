const punto = {
    x: 10,
    y: 15,
    dibujar (){
        console.log('Dibujando...')
    }
}
delete punto.dibujar
console.log(punto)
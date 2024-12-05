const punto = {
    x: 10,
    y: 15,
    dibujar (){
        console.log('Dibujando...')
    }
}
delete punto.dibujar
if ('dibujar' in punto){
    punto.dibujar
}
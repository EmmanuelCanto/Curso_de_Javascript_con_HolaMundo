/**
 * Nombre: ancho x alto
 * 8K 7680 X 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 X1080
 * HD 1280 X 720
 */

function nombreResolucion (ancho, alto) {
     if((ancho > alto) && ancho <= 1280 & alto <= 720){
        console.log('HD')
     }else if ((ancho > alto) && ancho <= 1920 & alto <= 1080)){
        console.log('FHD')

     }
}

console.log(nombreResolucion(1280, 720))
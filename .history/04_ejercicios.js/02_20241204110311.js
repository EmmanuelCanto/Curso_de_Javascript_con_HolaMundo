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
     }else if ((ancho > alto) && ancho <= 1920 & alto <= 1080){
        console.log('FHD')
     }else if ((ancho > alto) && ancho <= 2560 & alto <= 1440){
        console.log('WQHD')
     }else if ((ancho > alto) && ancho <= 3840 & alto <= 2160){
        console.log('4K')
     }
     else if ((ancho > alto) && ancho <= 7680 & alto <=43201440){
        console.log('8K')
     }else{
        console.log('Resolucion no valida')
     }
}

console.log(nombreResolucion(2000, 720))
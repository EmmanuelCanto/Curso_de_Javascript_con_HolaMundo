
let user = {
    email:'emmanuel-canto@hotmail.com',
    name:'Emmanuel',
    direccion: {
        calle: 'calle 4',
        numero: 1611
    },
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave')
    }
}


console.log(user.direccion)
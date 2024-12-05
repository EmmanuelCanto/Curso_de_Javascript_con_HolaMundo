
function crearUsuario(){
    
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave')
        }
    }

}

let user1 = crearUsuario('Nicolas','emmanuel-canto@hotmail.com')
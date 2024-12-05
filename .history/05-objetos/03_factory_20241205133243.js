
function crearUsuario(){
    
    return {
        id:1,
        email:'emmanuel-canto@hotmail.com',
        name:'Emmanuel',
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave')
        }
    }
    
}
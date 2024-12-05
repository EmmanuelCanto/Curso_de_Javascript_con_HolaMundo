
function crearUsuario(name, email){
    
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
let user2 = crearUsuario('Felipe','felipe@hotmail.com')

console.log(user1,user2)
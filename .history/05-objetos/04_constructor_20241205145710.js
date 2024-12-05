
// {id: 1, recuperaClave: function() {}}
function Usuario() {
    this.id = 1 
    this.recuperarClave = function () {
        console.log('Recuperando Clave...')
    }
}

let usuario = new Usuario()

console.log(usuario)
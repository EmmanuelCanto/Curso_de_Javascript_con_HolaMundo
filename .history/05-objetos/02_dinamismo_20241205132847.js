
const user = {id: 1}

user.name = 'Emmanuel'
user.guardar = function(){
    console.log('Guardando', user.name)
}

user.guardar()

delete user.name
delete user.guardar
console.log(user)

const user1 = Object.freeze({id:1})
user1.name = 'Emmanuel'
console.log(user1)
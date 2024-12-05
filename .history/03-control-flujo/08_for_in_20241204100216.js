//Listar propiedades
 let user = {
    id: 1,
    name: 'Chanchito Feliz',
    age: 25
 }

for (let prop in user){
    console.log(prop, user[prop])
}

// ejemplo
// id 1
// name Chanchito Feliz
// age 25


let animales = ['Chanchito feliz', 'Dragon', 'Canguro']

for (let indice in animales){
    console.log(indice, animales[indice])
}
// esto devuelve:
// 0 Chanchito feliz
// 1 Dragon
// 2 Canguro


let nombre = "chanchito feliz"
let username = nombre || "anonimo"
console.log(username)

function fn1() {
        console.log('soy funcion1')
        return true
}

function fn2() {
    console.log('soy funcion2')
    return true
}


let x = fn1() && fn2()
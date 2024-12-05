function Punto(x,y){
    this.x = x
    this.y = y
    this.dibujar = function(){console.log('Dibujando...')}
    return 1
}

let p = new Punto.call({}, 1, 2)


// const Point = new Function('x','y', `
//         this.x = x
//         this.y = y
//         this.dibujar = function(){console.log('Dibujando...')}
//     `)

//     const p = new Point(1,2)
//     console.log(p)

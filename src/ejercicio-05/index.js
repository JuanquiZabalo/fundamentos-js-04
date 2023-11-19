// Escribe tu código aquí:
// Definiendo clases y metodos

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    calcArea(){
        return this.width * this.height
    }
}

const rect1 = new Rectangle(5, 8)
console.log('Area:',rect1.calcArea())
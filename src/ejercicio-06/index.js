// Escribe tu código aquí:
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }

    calcArea(){
        return this.width * this.height
    }
}

class Square extends Rectangle{
    constructor(lado){
        super(lado, lado)
    }

}

const cuadrado = new Square(5)
console.log('Area cuadrado:', cuadrado.calcArea())
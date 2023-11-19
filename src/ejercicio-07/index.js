// Escribe tu código aquí:
class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    totalPrice(){
        return this.price * this.quantity
    }
}

const producto1 = new Product('Iphone', 655.98, 10)

console.log('Precio total:', producto1.totalPrice())

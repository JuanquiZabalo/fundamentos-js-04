// Escribe tu código aquí:
class Product{
    constructor(name= String, price= Number, quantity= Number){
        this.name = name
        this.price = price
        this.quantity = quantity

    }

    setQuantity(newQuantity= Number){
        this.quantity = newQuantity
    }

    totalPrice(){
        return this.price * this.quantity
    }
}

const producto1 = new Product('Samsung', 1000.0, 10);
console.log('Precio actual:', producto1.totalPrice())

producto1.setQuantity(15)
console.log('Precio modificado:', producto1.totalPrice())

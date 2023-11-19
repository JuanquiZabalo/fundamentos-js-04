// Escribe tu código aquí:
// Creacion de un constructor de objeto
function Product(name= String, price= Number, quantity= Number){
    this.name = name
    this.price = price
    this.quantity = quantity
}

const producto1 = new Product('Laptop', 799.9, 100)
const producto2 = new Product('Display', 287.99, 200)

console.log(producto1.name)
console.log(producto1)
console.log(producto2)
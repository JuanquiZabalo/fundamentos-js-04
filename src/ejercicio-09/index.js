// Escribe tu código aquí:
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    intoduce(){
        console.log(`Hola soy ${this.name} y tengo ${this.age} anios`)
    }
}

const persona1 = new Person('Juan', 28);
persona1.intoduce()
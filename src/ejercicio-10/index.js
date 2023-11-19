// Escribe tu código aquí:
class Person{
    constructor(name= String, age= Number) {
        this.name = name
        this.age = age
    }

    introduce(){
        console.log(`Hola soy ${this.name} y tengo ${this.age} anios`)
    }

}

class Student extends Person{
    constructor(name= String, age= Number, grade= Number) {
        super(name, age)
        this.grade = grade
    }

    introduce(){
        super.introduce()
        console.log(`Hola soy ${this.name} y tengo ${this.age} anios y estudio en ${this.grade} grado`)
    }
}

const persona1 = new Person('Lau', 27, 4)
const estudiante1 = new Student('Juan', 28, 5);

persona1.introduce()
estudiante1.introduce()
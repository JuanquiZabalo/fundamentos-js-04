// Escribe tu código aquí:
const carro = new Object()

carro['brand'] = 'Toyota'
carro['model'] = 'Camry'
carro['year'] = 2022

console.log(carro)

for (const item in carro) {
    console.log(`${item}: ${carro[item]}`)
}

const tabacoRegular = {
    nombre: 'Tabaco Regular',
    precio: 500
}
const tabacoPremium = {
    nombre: 'Tabaco Premium',
    precio: 750
}
const narguilaRegular = {
    nombre: 'Narguila Regular',
    precio: 3500
}
const narguilaPremium = {
    nombre: 'Tabaco Premium',
    precio: 5000
}
const productos = [tabacoRegular, tabacoPremium, narguilaRegular, narguilaPremium]

alert('Hola! Bienvenido a EcoNargui. Recuerde que para comprar nuestros productos debe ser mayor a 18 años')

let edad = parseInt(prompt('Por favor introduzca su edad:'))

if (edad >= 18){
let opcion = parseInt(prompt('Ingrese la opción que prefiera: \n 1- Conocer nuestros productos \n 2- Adquirir nuestros productos'))
switch (opcion) {
    case 1:
        console.table(productos)
}
}else {
    alert('Disculpe, no tiene la edad necesaria para poder adquirir nuestros productos')
}
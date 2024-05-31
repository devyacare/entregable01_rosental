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
        break
    case 2:
        function cantTabacoRegular (){
            let unidades = parseInt(prompt('¿Cuantas unidades desea?: '))
            let resultado = unidades * tabacoRegular.precio
            alert('El total de su compra es de: $'+ resultado + '. Dirijase a la caja para abonar')
        }
        function cantTabacoPremium (){
            let unidades = parseInt(prompt('¿Cuantas unidades desea?: '))
            let resultado = unidades * tabacoPremium.precio
            alert('El total de su compra es de: $'+ resultado + '. Dirijase a la caja para abonar')
        }
        function cantNarguilaRegular (){
            let unidades = parseInt(prompt('¿Cuantas unidades desea?: '))
            let resultado = unidades * narguilaRegular.precio
            alert('El total de su compra es de: $'+ resultado + '. Dirijase a la caja para abonar')
        }
        function cantNarguilaPremium (){
            let unidades = parseInt(prompt('¿Cuantas unidades desea?: '))
            let resultado = unidades * narguilaPremium.precio 
            alert('El total de su compra es de: $'+ resultado + '. Dirijase a la caja para abonar')
        }

        let opcionCompra = parseInt(prompt('¿Cuál de nuestros productos desea adquirir?: \n 1- Tabaco Regular \n 2- Tabaco Premium \n 3- Narguila Regular \n 4- Narguila Premium \n 5- Salir'))
        
        while (opcionCompra !== 5){
            switch (opcionCompra) {
                case 1:
                    cantTabacoRegular ()
                    break
                case 2:
                    cantTabacoPremium ()
                    break
                case 3:
                    cantNarguilaRegular ()
                    break
                case 4:
                    cantNarguilaPremium ()
                    break
                default:
                    alert('Opción incorrecta. Elija una dentro de las señaladas.')
                    break
            }

            opcionCompra = parseInt(prompt('¿Desea seguir comprando?: \n 1- Tabaco Regular \n 2- Tabaco Premium \n 3- Narguila Regular \n 4- Narguila Premium \n 5- Salir'))
        }
        alert('Finalizando el sistema de pedidos. Lo esperamos pronto.')

}
}else {
    alert('Disculpe, no tiene la edad necesaria para poder adquirir nuestros productos')
}
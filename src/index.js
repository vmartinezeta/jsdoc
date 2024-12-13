// Autor: Víctor Martínez
import { CajeroATM } from "./classes/ATM.js"
import { Monto } from "./classes/Monto.js"

const saldo = [
    new Monto({ billete: 100, cantidad: 0 }),
    new Monto({ billete: 50, cantidad: 0 }),
    new Monto({ billete: 20, cantidad: 5 }),
    new Monto({ billete: 10, cantidad: 20 })
]


const atm = new CajeroATM({ saldo })
try {
    console.log(atm.retirar({ cantidad: 200 }))
    console.log(atm.saldo)
} catch (error) {
    console.log(error.message)
}
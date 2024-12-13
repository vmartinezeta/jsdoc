// Autor: Víctor Martínez
export class CajeroATM {
    constructor({ saldo }) {
        this.saldo = saldo
        this.retiro = undefined
    }

    retirar = ({ cantidad }) => {
        this.retiro = cantidad
        let index = 0
        if (!this.puedeHacerRetiro()) {
            throw new TypeError("Fondos insuficientes!")
        }
        const montos = []
        while (this.retiro > 0) {
            const monto = this.saldo[index]
            const newMonto = monto.newInstance().fromTotal(this.retiro)
            if (!monto.hayPlata() || !newMonto.hayPlata()) {
                index++
                continue
            }

            newMonto.empatar(monto)
            monto.recortar(newMonto.cantidad)
            montos.push(newMonto)
            this.retiro -= newMonto.getTotal()
        }

        return montos
    }

    getTotal = () => {
        return this.saldo.reduce((total, monto) => total + monto.getTotal(), 0)
    }

    puedeHacerRetiro = () => {
        return this.retiro <= this.getTotal()
    }

}

// Autor: Víctor Martínez
export class Monto {
    constructor({ billete, cantidad }) {
        this.billete = billete
        this.cantidad = cantidad
    }

    fromTotal(total, billete) {
        this.billete = billete || this.billete
        const cantidad = parseInt(total / this.billete)
        this.cantidad = cantidad
        return this
    }

    hayPlata() {
        return this.cantidad > 0
    }

    getTotal() {
        return this.cantidad * this.billete
    }

    empatar(otro) {
        if (this.cantidad > otro.cantidad) {
            this.cantidad = otro.cantidad
        }
    }

    recortar(cantidad) {
        this.cantidad = this.cantidad - cantidad
    }

    newInstance() {
        return new Monto({ billete: this.billete, cantidad: this.cantidad })
    }
}
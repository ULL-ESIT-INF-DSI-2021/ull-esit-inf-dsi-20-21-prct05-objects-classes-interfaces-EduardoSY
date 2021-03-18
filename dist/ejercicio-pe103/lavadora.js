"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lavadora = void 0;
const electrodomestico_1 = require("./electrodomestico");
/**
 * Clase Lavadora. Esta clase hereda de
 * Electrodomestico.
 */
class Lavadora extends electrodomestico_1.Electrodomestico {
    constructor(precio, peso, color, consumo, carga) {
        super(precio, peso, color, consumo);
        this.precio = precio;
        this.peso = peso;
        this.carga = 5;
        if (peso > 100) {
            this.precio += 80;
        }
        this.carga = carga;
    }
    GetCarga() {
        return this.carga;
    }
}
exports.Lavadora = Lavadora;
;
// console.log("Hola");

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Television = void 0;
const electrodomestico_1 = require("./electrodomestico");
/**
 * Clase Lavadora. Esta clase hereda de
 * Electrodomestico.
 */
class Television extends electrodomestico_1.Electrodomestico {
    constructor(precio, peso, color, consumo, resolucion, smarttv) {
        super(precio, peso, color, consumo);
        this.precio = precio;
        this.peso = peso;
        this.resolucion = 20;
        this.smartTV = false;
        if (peso > 100) {
            this.precio += 80;
        }
        if (smarttv) {
            this.smartTV = true;
            this.precio += 50;
        }
        this.resolucion = resolucion;
    }
    GetRes() {
        return this.resolucion;
    }
}
exports.Television = Television;
;

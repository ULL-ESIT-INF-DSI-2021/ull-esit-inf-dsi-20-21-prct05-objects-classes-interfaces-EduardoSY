"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
/**
 * Clase general para definir cualquier tipo de electrodomestico
 */
class Electrodomestico {
    constructor(precio = 150, peso, color, consumo) {
        this.precio = 150;
        this.precio = precio;
        this.peso = peso;
        this.color = color;
        this.consumo = consumo;
    }
    /**
     * Esta funcion comprueba si el electrodomestico
     * está en el rango de peso (0-100 KG)
     * @returns true si está en el rango correcto. false en casi contrario.
     */
    RangoPeso() {
        if ((this.peso >= 0) && (this.peso <= 100)) {
            return true;
        }
        return false;
    }
    /**
     * Esta funcion comprueba si el electrodomestico
     * está en la gama de colores.
     * @returns true si está en el rango correcto. false en casi contrario.
     */
    RangoColores() {
        let colors = ["blanco", "negro", "rojo", "azul", "gris"];
        if (!(colors.indexOf(this.color) > -1)) {
            console.log("Color no valido. Seleccion de blanco por defecto");
            this.color = "blanco";
            return false;
        }
        return true;
    }
    /**
     * Esta funcion comprueba si el electrodomestico
     * está en el rango de consumo (A-F)
     * @returns true si está en el rango correcto. false en casi contrario.
     */
    RangoConsumo() {
        if (/[A-F]/.test(this.consumo) == false) {
            console.log("Consumo no valido");
            return false;
        }
        return true;
    }
    GetPrecio() {
        return this.precio;
    }
}
exports.Electrodomestico = Electrodomestico;
;

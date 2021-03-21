"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
/**
 * Clase Moto. Implementa un Moto
 */
class Moto {
    /**
     * Constructor de la clase Moto
     * @param nombre Marca o identificador del Moto
     * @param nRuedas Cantidad de ruedas
     * @param velocidad Velocidad a la que circula
     * @param capacidad Cantidad de personas que puede transportar
     */
    constructor(nombre, nRuedas, velocidad, capacidad) {
        this.nombre = nombre;
        this.nRuedas = nRuedas;
        this.velocidad = velocidad;
        this.capacidad = capacidad;
    }
    /**
     * Getter Nombre
     * @returns Nombre
     */
    getNombre() {
        return this.nombre;
    }
    /**
     * Getter cantidad ruedas
     * @returns cantidad ruedas
     */
    getNRuedas() {
        return this.nRuedas;
    }
    /**
     * Getter capacidad
     * @returns capacidad
     */
    getCapacidad() {
        return this.capacidad;
    }
    /**
     * Getter Nombre
     * @returns Nombre
     */
    getVelocidad() {
        return this.velocidad;
    }
}
exports.Moto = Moto;
;

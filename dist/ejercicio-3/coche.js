"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = void 0;
/**
 * Clase Coche. Implementa un coche
 */
class Coche {
    /**
     * Constructor de la clase Coche
     * @param nombre Marca o identificador del coche
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
exports.Coche = Coche;
;

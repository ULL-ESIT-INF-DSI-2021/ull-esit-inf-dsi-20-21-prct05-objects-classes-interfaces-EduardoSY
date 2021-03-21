"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Street = void 0;
const coche_1 = require("./coche");
const bicicleta_1 = require("./bicicleta");
const moto_1 = require("./moto");
const patin_1 = require("./patin");
const peaton_1 = require("./peaton");
/**
 * Clase Street. Permite crear una calle.
 * Ejemplo de creacion de calle
 * ```typescript
 * let calle: Street = new Street('Nombre Calle', 'Direccion', [coches],
 *    [bicicletas], [motos], [patin], [peatones], [trenes]);
 * ```
 */
class Street {
    /**
     * Constructor de la clase Street
     * @param calle Nombre de la calle
     * @param direccion Direccion de la calle
     * @param nCoche Array de objetos Coche que circulan en la calle
     * @param nBici Array de objetos Bicicleta que circulan en la calle
     * @param nMoto Array de objetos Moto que circulan en la calle
     * @param nPatin Array de objetos Patin que circulan en la calle
     * @param nPeaton Array de objetos Peaton que circulan en la calle
     * @param nTren Array de objetos Tren que circulan en la calle
     */
    constructor(calle, direccion, nCoche, nBici, nMoto, nPatin, nPeaton, nTren) {
        this.calle = calle;
        this.direccion = direccion;
        this.nCoche = nCoche;
        this.nBici = nBici;
        this.nMoto = nMoto;
        this.nPatin = nPatin;
        this.nPeaton = nPeaton;
        this.nTren = nTren;
    }
    /**
    * Funcion que muestra los objetos actuales en la calle. Es decir, muestra
    * cuantos vehículos de cada tipo hay circulando
    */
    infoCalle() {
        console.log("Vehiculos circulando en " + this.calle +
            " Direccion: " + this.direccion);
        console.log("-> CANTIDAD MOTOS = " + this.nMoto.length);
        console.table(this.nMoto);
        console.log("-> CANTIDAD COCHES = " + this.nCoche.length);
        console.table(this.nCoche);
        console.log("-> CANTIDAD BICICLETAS = " + this.nBici.length);
        console.table(this.nBici);
        console.log("-> CANTIDAD PATINES = " + this.nPatin.length);
        console.table(this.nPatin);
        console.log("-> CANTIDAD PEATONES = " + this.nPeaton.length);
        console.table(this.nPeaton);
        console.log("-> CANTIDAD TRENES = " + this.nTren.length);
        console.table(this.nTren);
    }
    /**
     * Permite añadir un vehiculo a la carretera.
     * @param vehiculo Vehiculo a añadir
     */
    addVehiculo(vehiculo) {
        if (vehiculo instanceof moto_1.Moto) {
            this.nMoto.push(vehiculo);
        }
        else if (vehiculo instanceof coche_1.Coche) {
            this.nCoche.push(vehiculo);
        }
        else if (vehiculo instanceof bicicleta_1.Bicicleta) {
            this.nBici.push(vehiculo);
        }
        else if (vehiculo instanceof patin_1.Patin) {
            this.nPatin.push(vehiculo);
        }
        else if (vehiculo instanceof peaton_1.Peaton) {
            this.nPeaton.push(vehiculo);
        }
        else {
            this.nTren.push(vehiculo);
        }
    }
    /**
     * Permite eliminar un vehiculo de la calle
     * @param vehiculo Vehiculo a eliminar
     */
    delVehiculo(vehiculo) {
        if (vehiculo instanceof moto_1.Moto) {
            this.nMoto.splice(this.nMoto.indexOf(vehiculo), 1);
        }
        else if (vehiculo instanceof coche_1.Coche) {
            this.nCoche.splice(this.nCoche.indexOf(vehiculo), 1);
        }
        else if (vehiculo instanceof bicicleta_1.Bicicleta) {
            this.nBici.splice(this.nBici.indexOf(vehiculo), 1);
        }
        else if (vehiculo instanceof patin_1.Patin) {
            this.nPatin.splice(this.nPatin.indexOf(vehiculo), 1);
        }
        else if (vehiculo instanceof peaton_1.Peaton) {
            this.nPeaton.splice(this.nPeaton.indexOf(vehiculo), 1);
        }
        else {
            this.nTren.splice(this.nTren.indexOf(vehiculo), 1);
        }
    }
    ordenarVelocidad() {
        this.nMoto.sort(function (a, b) {
            return a.getVelocidad() - b.getVelocidad();
        });
        this.nCoche.sort(function (a, b) {
            return a.getVelocidad() - b.getVelocidad();
        });
        this.nBici.sort(function (a, b) {
            return a.getVelocidad() - b.getVelocidad();
        });
        this.nPatin.sort(function (a, b) {
            return a.getVelocidad() - b.getVelocidad();
        });
        this.nPeaton.sort(function (a, b) {
            return a.getVelocidad() - b.getVelocidad();
        });
        this.nTren.sort(function (a, b) {
            return a.getVelocidad() - b.getVelocidad();
        });
        console.log("\nVehiculos ordenador por VELOCIDAD\n---");
        this.infoCalle();
    }
}
exports.Street = Street;
let moto1 = new moto_1.Moto('Kawasaki', 2, 96, 2);
let moto2 = new moto_1.Moto('Yamaha', 2, 78, 2);
let coche1 = new coche_1.Coche('Opel', 4, 50, 4);
let calle = new Street('Calle Marquez', 'La Orotava', [], [], [moto1, moto2], [], [], []);
calle.infoCalle();
calle.delVehiculo(coche1);
calle.infoCalle();

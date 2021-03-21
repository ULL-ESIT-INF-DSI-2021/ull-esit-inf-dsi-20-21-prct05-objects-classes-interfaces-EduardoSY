"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(nombreEntrada, pesoEntrada, alturaEntrada, tipoEntrada, statsEntrada) {
        this.stats = new Array(4);
        this.hpCombate = 0;
        this.nombre = nombreEntrada;
        this.peso = pesoEntrada;
        this.altura = alturaEntrada;
        this.tipo = tipoEntrada;
        this.stats = statsEntrada;
        this.hpCombate = this.stats[3];
    }
    getName() {
        return this.nombre;
    }
    getType() {
        return this.tipo;
    }
    getAttack() {
        return this.stats[0];
    }
    getDef() {
        return this.stats[1];
    }
    getMaxHP() {
        return this.stats[3];
    }
    getAltura() {
        return this.altura;
    }
    getPeso() {
        return this.peso;
    }
    showData() {
        console.log("Pokemon -> " + this.getName() + " Tipo: " +
            this.getType() + " Atk. " + this.getAttack() + " Def. " +
            this.getDef() + " HP. " + this.getMaxHP());
    }
}
exports.Pokemon = Pokemon;
;

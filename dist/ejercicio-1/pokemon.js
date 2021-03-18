"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(nombre_entrada, peso_entrada, altura_entrada, tipo_entrada, stats_entrada) {
        this.nombre_entrada = nombre_entrada;
        this.peso_entrada = peso_entrada;
        this.altura_entrada = altura_entrada;
        this.tipo_entrada = tipo_entrada;
        this.stats_entrada = stats_entrada;
        this.stats = new Array(4);
        this.hp_combate = 0;
        this.nombre = nombre_entrada;
        this.peso = peso_entrada;
        this.altura = altura_entrada;
        this.tipo = tipo_entrada;
        this.stats = stats_entrada;
        this.hp_combate = this.stats[3];
    }
    get_name() {
        return this.nombre;
    }
    get_type() {
        return this.tipo;
    }
    get_attack() {
        return this.stats[0];
    }
    get_def() {
        return this.stats[1];
    }
    get_maxHP() {
        return this.stats[3];
    }
}
exports.Pokemon = Pokemon;
;

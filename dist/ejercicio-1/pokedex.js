"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
class Pokedex {
    constructor() {
        this.datosPokemon = [];
    }
    ;
    addPokemon(pokemon) {
        this.datosPokemon.push(pokemon);
    }
    delPokemon(pokemon) {
        let pos = -1;
        this.datosPokemon.forEach((iter) => {
            if (iter === pokemon) {
                pos = this.datosPokemon.indexOf(iter);
            }
        });
        if (pos == -1) {
            console.log('Imposible eliminar. Pokemon no encontrado');
        }
        else {
            this.datosPokemon.splice(pos, 1);
        }
    }
    ;
    pokedexSize() {
        return this.datosPokemon.length;
    }
    buscarPokemon(pokemon) {
        let pos = -1;
        this.datosPokemon.forEach((iter) => {
            if (iter === pokemon) {
                pos = this.datosPokemon.indexOf(iter);
            }
        });
        if (pos == -1) {
            return null;
        }
        else {
            return this.datosPokemon[pos];
        }
    }
}
exports.Pokedex = Pokedex;
;

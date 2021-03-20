"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = void 0;
class Combat {
    constructor(pokemon1, pokemon2) {
        this.datos = new Array(2);
        this.poke1 = pokemon1;
        this.poke2 = pokemon2;
        // console.log(this.poke1.getName());
    }
    combatir() {
        this.datos[0] = this.combatePokemon(this.poke1.getType(), this.poke2.getType(), this.poke1.getAttack(), this.poke2.getDef());
        this.datos[1] = this.combatePokemon(this.poke2.getType(), this.poke1.getType(), this.poke2.getAttack(), this.poke1.getDef());
        let iterator = 1;
        console.log("\n## COMBATE POKEMON ##\n" +
            this.poke1.getName() + " - VS - " + this.poke2.getName());
        while ((this.poke1.hpCombate > 0) && (this.poke2.hpCombate > 0)) {
            console.log("\n -[ Ronda " + iterator + " ]-");
            if ((iterator % 2) == 0) {
                console.log(this.poke2.getName() + " inflinje -" + this.datos[1] +
                    " a " + this.poke1.getName());
                this.poke1.hpCombate -= this.datos[1];
            }
            else {
                console.log(this.poke1.getName() + " inflinje -" + this.datos[0] +
                    " a " + this.poke2.getName());
                this.poke2.hpCombate -= this.datos[0];
            }
            iterator++;
            console.log(this.poke1.getName() + " [HP: " +
                +(this.poke1.hpCombate).toFixed(2) + "] VS " +
                this.poke2.getName() + " [HP: " +
                +(this.poke2.hpCombate).toFixed(2) + "]");
        }
        console.log("\n -> GANADOR: " +
            (this.poke1.hpCombate <= 0 ? this.poke2.getName() : this.poke1.getName()));
    }
    combatePokemon(tipo1, tipo2, ataque, defensa) {
        // Variable de efectividad del ataque
        let efectividad = 0;
        if (tipo1 === tipo2) {
            efectividad = 0.5;
        }
        else if (tipo1 === 'Fuego') {
            switch (tipo2) {
                case 'Hierba':
                    efectividad = 2;
                    break;
                case 'Electrico':
                    efectividad = 1;
                    break;
                case 'Agua':
                    efectividad = 0.5;
                    break;
            }
        }
        else if (tipo1 === 'Agua') {
            switch (tipo2) {
                case ('Hierba'):
                case ('Electrico'):
                    efectividad = 0.5;
                    break;
                case 'Fuego':
                    efectividad = 2;
                    break;
            }
        }
        else if (tipo1 === 'Electrico') {
            switch (tipo2) {
                case ('Fuego'):
                case ('Hierba)'):
                    efectividad = 1;
                    break;
                case 'Agua':
                    efectividad = 2;
                    break;
            }
        }
        else {
            switch (tipo2) {
                case 'Electrico':
                    efectividad = 1;
                    break;
                case 'Agua':
                    efectividad = 2;
                    break;
                case 'Fuego':
                    efectividad = 0.5;
                    break;
            }
        }
        let damage = 50 * (ataque / defensa) * efectividad;
        return parseFloat(damage.toFixed(2));
    }
}
exports.Combat = Combat;

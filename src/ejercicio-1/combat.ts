import {Pokemon} from './pokemon';

/**
 * Clase Combate. Esta clase realiza un combate entre dos pokemon
 */
export class Combat {
  // private poke1: Pokemon = new Pokemon("a",4,4,"aa",[1,2,3,5]);
  private poke1: Pokemon;
  private poke2: Pokemon;
  /**
   * Array que almacenerá el valor de los ataques de un pokemon al otro.
   */
  private datos: number[] = new Array(2);
  /**
   * Constructor de la clase Combate
   * @param pokemon1 Objeto de la class Pokemon
   * @param pokemon2 Objeto de la class Pokemon
   */
  constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
    this.poke1 = pokemon1;
    this.poke2 = pokemon2;
  }
  /**
   * Funcion combatir. Lleva a cabo el combate entre los dos pokemon.
   * Cuando el combate finaliza muestra por pantalla en ganador.
   */
  combatir(): Pokemon {
    this.datos[0] = this.calculoCombate(this.poke1.getType(),
        this.poke2.getType(), this.poke1.getAttack(), this.poke2.getDef());
    this.datos[1] = this.calculoCombate(this.poke2.getType(),
        this.poke1.getType(), this.poke2.getAttack(), this.poke1.getDef());
    let iterator: number = 1;
    console.log("\n## COMBATE POKEMON ##\n" +
    this.poke1.getName() + " - VS - " + this.poke2.getName());
    while ((this.poke1.hpCombate > 0) && (this.poke2.hpCombate > 0)) {
      console.log("\n -[ Ronda " + iterator + " ]-");
      if ((iterator % 2) == 0) {
        console.log(this.poke2.getName() + " inflinje -" + this.datos[1] +
        " a " + this.poke1.getName());
        this.poke1.hpCombate -= this.datos[1];
      } else {
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
    (this.poke1.hpCombate <= 0?this.poke2.getName() : this.poke1.getName()));

    if (this.poke1.hpCombate <= 0) {
      return this.poke2;
    } else {
      return this.poke1;
    }
  }

  /**
   * Calcula el daño del ataque del pokemon 1 al pokemon 2 en funcion
   * de sus tipos y estadísticas.
   * @param tipo1 Tipo del pokemon 1
   * @param tipo2 Tipo del pokemon 2
   * @param ataque Ataque del pokemon 1
   * @param defensa Defensa del pokemon 2
   * @returns Daño inflingido del pokemon 1 al pokemon 2
   */
  calculoCombate(tipo1: string, tipo2: string,
      ataque: number, defensa: number): number {
    let efectividad: number = 0; // Variable de efectividad del ataque
    if (tipo1 === tipo2) {
      efectividad = 0.5;
    } else if (tipo1 === 'Fuego') {
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
    } else if (tipo1 === 'Agua') {
      switch (tipo2) {
        case ('Hierba'):
        case ('Electrico'):
          efectividad = 0.5;
          break;
        case 'Fuego':
          efectividad = 2;
          break;
      }
    } else if (tipo1 === 'Electrico') {
      switch (tipo2) {
        case ('Fuego'):
        case ('Hierba)'):
          efectividad = 1;
          break;
        case 'Agua':
          efectividad = 2;
          break;
      }
    } else {
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

    let damage: number = 50 * (ataque/defensa) * efectividad;
    return parseFloat(damage.toFixed(2));
  }
}

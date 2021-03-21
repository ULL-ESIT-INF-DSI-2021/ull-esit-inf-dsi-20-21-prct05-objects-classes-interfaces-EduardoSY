import {Pokemon} from './pokemon';

export class Pokedex {
  private datosPokemon: Pokemon[] = [];
  constructor() {};

  public addPokemon(pokemon: Pokemon) {
    this.datosPokemon.push(pokemon);
  }

  public delPokemon(pokemon: Pokemon) {
    let pos: number = -1;
    this.datosPokemon.forEach((iter) => {
      if (iter === pokemon) {
        pos = this.datosPokemon.indexOf(iter);
      }
    });
    if (pos == -1) {
      console.log('Imposible eliminar. Pokemon no encontrado');
    } else {
      this.datosPokemon.splice(pos, 1);
    }
  };

  public pokedexSize(): number {
    return this.datosPokemon.length;
  }

  public buscarPokemon(pokemon: Pokemon) {
    let pos: number = -1;
    this.datosPokemon.forEach((iter) => {
      if (iter === pokemon) {
        pos = this.datosPokemon.indexOf(iter);
      }
    });
    if (pos == -1) {
      return null;
    } else {
      return this.datosPokemon[pos];
    }
  }
};

import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Pokedex} from '../../src/ejercicio-1/pokedex';

describe('Comprobando clase Pokedex', () => {
  const poke1: Pokemon = new Pokemon("Pikachu", 6, 4, "Electrico",
      [54, 22, 4, 265]);

  const poke2: Pokemon = new Pokemon("Magikarp", 6, 4, "Agua",
      [3, 46, 4, 575]);

  const poke3: Pokemon = new Pokemon("Poliwag", 12, 0.6, "Agua",
      [50, 40, 90, 284]);

  const pokedex: Pokedex = new Pokedex();

  pokedex.addPokemon(poke1);
  pokedex.addPokemon(poke2);
  pokedex.addPokemon(poke3);

  it('Longitud de pokedex tras 3 add = 3', () => {
    expect(pokedex.pokedexSize()).to.be.equal(3);
  });

  it("buscarPokemon(poke1) devuelve poke1. Busca a pikachu", () => {
    expect(pokedex.buscarPokemon(poke1)).to.be.equal(poke1);
  });
});
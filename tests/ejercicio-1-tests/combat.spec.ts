import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';
import {Combat} from '../../src/ejercicio-1/combat';

describe('Comprobando clase Combate', () => {
  const poke1: Pokemon = new Pokemon("Pikachu", 6, 4, "Electrico",
      [54, 22, 4, 265]);

  const poke2: Pokemon = new Pokemon("Magikarp", 6, 4, "Agua",
      [3, 46, 4, 575]);

  const combate: Combat = new Combat(poke1, poke2);

  it('Llamada a funcion de combate no es null', () => {
    expect(combate.combatir()).not.to.be.equal(null);
  });

  it("Resultado combate = Gana Pikachu", () => {
    expect(combate.combatir()).to.equal(poke1);
  });
});
import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio-1/pokemon';

describe('Comprobando clase Pokemon', () => {
  const poke1: Pokemon = new Pokemon("Pikachu", 6, 4, "Electrico", [54, 22,
    4, 265]);
  it('Nombre de Pikachu', () => {
    expect(poke1.getName()).to.be.equal("Pikachu");
  });
  it('Altura de Pikachu = 4', () => {
    expect(poke1.getAltura()).to.be.equal(4);
  });
  it('Ataque de Pikachu = 54', () => {
    expect(poke1.getAttack()).to.be.equal(54);
  });
  it('Tipo de Pikachu', () => {
    expect(poke1.getType()).to.be.equal("Electrico");
  });
});
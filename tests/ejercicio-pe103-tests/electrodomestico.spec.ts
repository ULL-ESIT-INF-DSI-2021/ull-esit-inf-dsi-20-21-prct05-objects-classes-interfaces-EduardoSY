import 'mocha';
import {expect} from 'chai';
import {Electrodomestico} from '../../src/ejercicio-pe103/electrodomestico';


describe("Electrodomestico", () => {
  let tested: Electrodomestico;

  beforeEach(() => tested = new Electrodomestico(100, 5, "blanco", "A"));

  describe("Precio Electrodomestico", () => {
    it("Precio eletrodomestico = 100", () => {
      expect(tested.GetPrecio()).to.be.equal(100);
    });
    it("Color eletrodomestico = blanco (TRUE)", () => {
      expect(tested.RangoColores()).to.be.true;
    });
    it("Peso eletrodomestico = 5 (TRUE)", () => {
      expect(tested.RangoPeso()).to.be.true;
    });
  });
});
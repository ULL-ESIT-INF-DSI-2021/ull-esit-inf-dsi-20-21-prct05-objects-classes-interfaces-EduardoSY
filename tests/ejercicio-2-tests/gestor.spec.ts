import 'mocha';
import {expect} from 'chai';
import {Gestor} from '../../src/ejercicio-2/gestor';
import {Articulo} from '../../src/ejercicio-2/articulo';

describe('Comprobando clase Gestor', () => {
  const articulo1 = new Articulo("A modified descent method-based...",
      ["Isma Dahmani", "Mhand Hifi"], ["isma@gmail.com,", "mhand@gmail.com"],
      ["Optimization", "Binary"], "Cosas de grafos y demás", '2021',
      "SpringerLink", 2);

  const articulo2 = new Articulo("On exact solution approaches for bilevel...",
      ["Gabriel Lopez"], ["gl@gmail.com,", "mhand@gmail.com"],
      ["Bilevel", "Quadratic"], "Cosas cuadraticas y eso", '2021',
      "SpringerLink", 1);

  const gestor: Gestor = new Gestor(articulo1, articulo2);
  it('Cantidad de elementos que tienen Bilavel como clave -> 1', () => {
    expect(gestor.busqueda('Bilevel').length).to.be.equal(1);
  });
  it('Cantidad de elementos que tienen Wiwi como clave -> 0', () => {
    expect(gestor.busqueda('Wiwi').length).to.be.equal(0);
  });
  it('Cantidad de elementos exportados segun norma APA sin DOI -> 1', () => {
    expect(gestor.exportarAPA('Bilevel').length).to.be.equal(1);
  });
});
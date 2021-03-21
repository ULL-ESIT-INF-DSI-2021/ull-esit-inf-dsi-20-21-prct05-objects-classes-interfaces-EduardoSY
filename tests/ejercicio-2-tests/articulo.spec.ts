import 'mocha';
import {expect} from 'chai';

import {Articulo} from '../../src/ejercicio-2/articulo';

describe('Comprobando clase Articulo', () => {
  const articulo1 = new Articulo("A modified descent method-based...",
      ["Isma Dahmani", "Mhand Hifi"], ["isma@gmail.com,", "mhand@gmail.com"],
      ["Optimization", "Binary"], "Cosas de grafos y demás", '2021',
      "SpringerLink", 2);

  it('Cantidad de citas del articulo 1 -> 2', () => {
    expect(articulo1.getCitas()).to.be.equal(2);
  });
  it('Titulo del articulo 1 -> A modified descent method-based...', () => {
    expect(articulo1.getTitulo()).to.be.
        equal('A modified descent method-based...');
  });
  it('Autors articulo 1 -> 2', () => {
    expect(articulo1.getAutor()).to.be.deep.
        equal(['Isma Dahmani', 'Mhand Hifi']);
  });
  it('Palabras clave articulo 1 -> ["Optimization", "Binary"]', () => {
    expect(articulo1.getClaves()).to.be.deep.
        equal(["Optimization", "Binary"]);
  });
  it('Formato APA -> Dahmani, I. & Hifi, M. (2021). A modified descent method-based.... SpringerLink.', () => {
    expect(articulo1.apasinDOI()).to.be.
        equal('Dahmani, I. & Hifi, M. (2021). A modified descent method-based.... SpringerLink.');
  });
});
import 'mocha';
import {expect} from 'chai';
import {Coche} from '../../src/ejercicio-3/coche';
import {Moto} from '../../src/ejercicio-3/moto';
import {Peaton} from '../../src/ejercicio-3/peaton';
import {Street} from '../../src/ejercicio-3/street';


describe('Comprobando clase Street', () => {
  const coche1: Coche = new Coche('Opel', 4, 50, 4);
  const moto1: Moto = new Moto('Kawasaki', 2, 96, 2);
  const moto2: Moto = new Moto('Yamaha', 2, 78, 2);
  const moto3: Moto = new Moto('Ducati', 2, 56, 2);
  const peaton1: Peaton = new Peaton('Emiliano', 0, 7, 1);

  let calle: Street = new Street('Calle Marquez', 'La Orotava',
      [coche1], [], [moto1, moto2, moto3], [], [], []);

  it('La instancia de la calle no es null', () => {
    expect(calle).not.to.be.equal(null);
  });
  it('Informacion de la calle. Solo deben haber 4 vehiculos', () => {
    calle.infoCalle();
  });
  it('Añadimos a un peaton. Ahora deben ser 5 vehiculos', () => {
    calle.addVehiculo(peaton1);
    calle.infoCalle();
  });
  it('Ordenamos por velocidad', () => {
    calle.ordenarVelocidad();
    calle.infoCalle();
  });
  it('Eliminamos una moto. Ahora deben ser 4 vehiculos', () => {
    calle.delVehiculo(moto1);
    calle.infoCalle();
  });
});
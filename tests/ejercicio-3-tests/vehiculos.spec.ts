import 'mocha';
import {expect} from 'chai';
import {Coche} from '../../src/ejercicio-3/coche';


describe('Comprobando clase Coche (el resto son iguales)', () => {
  const coche1: Coche = new Coche('Opel', 4, 50, 4);
  it('La instancia no es null', () => {
    expect(coche1).not.to.be.equal(null);
  });
  it('El coche es un Opel', () => {
    expect(coche1.getNombre()).to.be.equal('Opel');
  });
  it('Este coche tiene 4 ruedas', () => {
    expect(coche1.getNRuedas()).to.be.equal(4);
  });
  it('Este coche viaja a 50 km/h', () => {
    expect(coche1.getVelocidad()).to.be.equal(50);
  });
  it('Este coche tiene una capacidad de 4 personas', () => {
    expect(coche1.getCapacidad()).to.be.equal(4);
  });
});
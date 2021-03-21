import {Movable} from './movable';

/**
 * Clase Bicicleta. Implementa una bicicleta
 */
export class Bicicleta implements Movable {
  /**
   * Constructor de la clase Bicicleta
   * @param nombre Marca o identificador del bicicleta
   * @param nRuedas Cantidad de ruedas
   * @param velocidad Velocidad a la que circula
   * @param capacidad Cantidad de personas que puede transportar
   */
  constructor(public nombre: string, public nRuedas: number,
    public velocidad: number, public capacidad: number) {
  }

  /**
   * Getter Nombre
   * @returns Nombre
   */
  public getNombre() {
    return this.nombre;
  }
  /**
   * Getter cantidad ruedas
   * @returns cantidad ruedas
   */
  public getNRuedas() {
    return this.nRuedas;
  }
  /**
   * Getter capacidad
   * @returns capacidad
   */
  public getCapacidad() {
    return this.capacidad;
  }
  /**
   * Getter Nombre
   * @returns Nombre
   */
  public getVelocidad() {
    return this.velocidad;
  }
};
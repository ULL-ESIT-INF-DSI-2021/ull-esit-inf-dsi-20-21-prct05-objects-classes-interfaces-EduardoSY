import {Movable} from './movable';

/**
 * Clase Coche. Implementa un coche
 */
export class Coche implements Movable {
  /**
   * Constructor de la clase Coche
   * @param nombre Marca o identificador del coche
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
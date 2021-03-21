import {Movable} from './movable';

/**
 * Clase Tren. Implementa un Tren
 */
export class Tren implements Movable {
  /**
   * Constructor de la clase Tren
   * @param nombre Marca o identificador del Tren
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
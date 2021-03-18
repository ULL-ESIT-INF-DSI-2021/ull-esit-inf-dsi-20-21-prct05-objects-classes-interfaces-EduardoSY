import {Electrodomestico} from './electrodomestico';

/**
 * Clase Lavadora. Esta clase hereda de
 * Electrodomestico.
 */
export class Television extends Electrodomestico {
    resolucion: number = 20;
    smartTV: boolean = false;
    constructor(public precio: number, public peso: number,
        color: string, consumo: string, resolucion: number, smarttv: boolean) {
      super(precio, peso, color, consumo);
      if (peso > 100) {
        this.precio += 80;
      }
      if (smarttv) {
        this.smartTV = true;
        this.precio += 50;
      }
      this.resolucion = resolucion;
    }

    GetRes():number {
      return this.resolucion;
    }
};
import {Electrodomestico} from './electrodomestico';

/**
 * Clase Lavadora. Esta clase hereda de
 * Electrodomestico.
 */
export class Lavadora extends Electrodomestico {
    carga: number = 5;
    constructor(public precio: number, public peso: number,
        color: string, consumo: string, carga: number) {
      super(precio, peso, color, consumo);
      if (peso > 100) {
        this.precio += 80;
      }
      this.carga = carga;
    }

    GetCarga():number {
      return this.carga;
    }
};

// console.log("Hola");

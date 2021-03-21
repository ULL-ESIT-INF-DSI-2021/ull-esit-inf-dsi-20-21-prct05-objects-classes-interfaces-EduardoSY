import {Coche} from './coche';
import {Bicicleta} from './bicicleta';
import {Moto} from './moto';
import {Patin} from './patin';
import {Peaton} from './peaton';
import {Tren} from './tren';

/**
 * Clase Street. Permite crear una calle.
 * Ejemplo de creacion de calle
 * ```typescript
 * let calle: Street = new Street('Nombre Calle', 'Direccion', [coches],
 *    [bicicletas], [motos], [patin], [peatones], [trenes]);
 * ```
 */
export class Street {
  /**
   * Constructor de la clase Street
   * @param calle Nombre de la calle
   * @param direccion Direccion de la calle
   * @param nCoche Array de objetos Coche que circulan en la calle
   * @param nBici Array de objetos Bicicleta que circulan en la calle
   * @param nMoto Array de objetos Moto que circulan en la calle
   * @param nPatin Array de objetos Patin que circulan en la calle
   * @param nPeaton Array de objetos Peaton que circulan en la calle
   * @param nTren Array de objetos Tren que circulan en la calle
   */
  constructor(private calle: string, private direccion: string,
      private nCoche: Coche[], private nBici: Bicicleta[],
      private nMoto: Moto[], private nPatin: Patin[],
      private nPeaton: Peaton[], private nTren: Tren[]) {
  }
  /**
  * Funcion que muestra los objetos actuales en la calle. Es decir, muestra
  * cuantos vehículos de cada tipo hay circulando
  */
  public infoCalle() {
    console.log("Vehiculos circulando en " + this.calle +
    " Direccion: " + this.direccion);
    console.log("-> CANTIDAD MOTOS = " + this.nMoto.length);
    console.table(this.nMoto);
    console.log("-> CANTIDAD COCHES = " + this.nCoche.length);
    console.table(this.nCoche);
    console.log("-> CANTIDAD BICICLETAS = " + this.nBici.length);
    console.table(this.nBici);
    console.log("-> CANTIDAD PATINES = " + this.nPatin.length);
    console.table(this.nPatin);
    console.log("-> CANTIDAD PEATONES = " + this.nPeaton.length);
    console.table(this.nPeaton);
    console.log("-> CANTIDAD TRENES = " + this.nTren.length);
    console.table(this.nTren);
  }
  /**
   * Permite añadir un vehiculo a la carretera.
   * @param vehiculo Vehiculo a añadir
   */
  public addVehiculo(vehiculo: Moto|Coche|Bicicleta|Patin|Peaton|Tren) {
    if (vehiculo instanceof Moto) {
      this.nMoto.push(vehiculo);
    } else if (vehiculo instanceof Coche) {
      this.nCoche.push(vehiculo);
    } else if (vehiculo instanceof Bicicleta) {
      this.nBici.push(vehiculo);
    } else if (vehiculo instanceof Patin) {
      this.nPatin.push(vehiculo);
    } else if (vehiculo instanceof Peaton) {
      this.nPeaton.push(vehiculo);
    } else {
      this.nTren.push(vehiculo);
    }
  }
  /**
   * Permite eliminar un vehiculo de la calle
   * @param vehiculo Vehiculo a eliminar
   */
  public delVehiculo(vehiculo: Moto|Coche|Bicicleta|Patin|Peaton|Tren) {
    if (vehiculo instanceof Moto) {
      this.nMoto.splice(this.nMoto.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Coche) {
      this.nCoche.splice(this.nCoche.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Bicicleta) {
      this.nBici.splice(this.nBici.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Patin) {
      this.nPatin.splice(this.nPatin.indexOf(vehiculo), 1);
    } else if (vehiculo instanceof Peaton) {
      this.nPeaton.splice(this.nPeaton.indexOf(vehiculo), 1);
    } else {
      this.nTren.splice(this.nTren.indexOf(vehiculo), 1);
    }
  }

  /**
   * Funcion que permite ordenar los vehiculos en función a su velocidad
   * Los más lentos irán primero en la lista. Una vez ordenado muestro
   * cómo está la calle.
   */
  public ordenarVelocidad() {
    this.nMoto.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nCoche.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nBici.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nPatin.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nPeaton.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    this.nTren.sort(function(a, b) {
      return a.getVelocidad() - b.getVelocidad();
    });
    console.log("\nVehiculos ordenador por VELOCIDAD\n---");
  }
}

/* let moto1: Moto = new Moto('Kawasaki', 2, 96, 2);
let moto2: Moto = new Moto('Yamaha', 2, 78, 2);
let coche1: Coche = new Coche('Opel', 4, 50, 4);
let calle: Street = new Street('Calle Marquez', 'La Orotava',
    [], [], [moto1, moto2], [], [], []);
calle.infoCalle();
calle.delVehiculo(coche1);
calle.infoCalle();*/
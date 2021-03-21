import {Articulo} from './articulo';

export class Gestor {
  private listaArticulos: Articulo[] = [];

  constructor(articulo1: Articulo, ...articulos: Articulo[]) {
    this.listaArticulos.push(articulo1);
    for (let element of articulos) {
      this.listaArticulos.push(element);
    }
  }

  public imprimirTabla() {
    console.table(this.listaArticulos);
  }

  public getSizeGestor() {
    return this.listaArticulos.length;
  }

  public busqueda(clave: string): Articulo[] {
    let resultado: Articulo[] = [];
    for (let articulo of this.listaArticulos) {
      for (let key of articulo.getClaves()) {
        if (key === clave) {
          resultado.push(articulo);
          break;
        }
      }
    }
    return resultado;
  }

  public exportarAPA(clave: string): string[] {
    let resultBusqueda: Articulo[] = this.busqueda(clave);
    let resultExport: string[] = [];
    for ( let element of resultBusqueda) {
      resultExport.push(element.apasinDOI());
    }
    return resultExport;
  }
};
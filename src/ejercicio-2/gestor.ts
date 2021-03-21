import {Articulo} from './articulo';
/**
 * Clase Gestor de articulos
 */
export class Gestor {
  private listaArticulos: Articulo[] = [];
  /**
   * Constructor de la clase Gestor
   * @param articulo1 Primer articulo (necesario)
   * @param articulos Resto de posibles articulos
   */
  constructor(articulo1: Articulo, ...articulos: Articulo[]) {
    this.listaArticulos.push(articulo1);
    for (let element of articulos) {
      this.listaArticulos.push(element);
    }
  }
  /**
   * Muestra la información del gestor en forma de tabla
   */
  public imprimirTabla() {
    console.table(this.listaArticulos);
  }
  /**
   * Getter cantidad de articulos del gestor
   * @returns cantidad de articulos Gestor
   */
  public getSizeGestor() {
    return this.listaArticulos.length;
  }
  /**
   * Buscar articulos que coincidan con las palabras clave
   * @param clave Palabras clave a buscar
   * @returns Lista de articulos que coinciden
   */
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

  /**
   * Buscar articulos que coincinden con palabra clave y se exportan a
   * formato APA
   * @param clave Claves a buscar
   * @returns Articulos en formato APA
   */
  public exportarAPA(clave: string): string[] {
    let resultBusqueda: Articulo[] = this.busqueda(clave);
    let resultExport: string[] = [];
    for ( let element of resultBusqueda) {
      resultExport.push(element.apasinDOI());
    }
    return resultExport;
  }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestor = void 0;
/**
 * Clase Gestor de articulos
 */
class Gestor {
    /**
     * Constructor de la clase Gestor
     * @param articulo1 Primer articulo (necesario)
     * @param articulos Resto de posibles articulos
     */
    constructor(articulo1, ...articulos) {
        this.listaArticulos = [];
        this.listaArticulos.push(articulo1);
        for (let element of articulos) {
            this.listaArticulos.push(element);
        }
    }
    /**
     * Muestra la información del gestor en forma de tabla
     */
    imprimirTabla() {
        console.table(this.listaArticulos);
    }
    /**
     * Getter cantidad de articulos del gestor
     * @returns cantidad de articulos Gestor
     */
    getSizeGestor() {
        return this.listaArticulos.length;
    }
    /**
     * Buscar articulos que coincidan con las palabras clave
     * @param clave Palabras clave a buscar
     * @returns Lista de articulos que coinciden
     */
    busqueda(clave) {
        let resultado = [];
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
    exportarAPA(clave) {
        let resultBusqueda = this.busqueda(clave);
        let resultExport = [];
        for (let element of resultBusqueda) {
            resultExport.push(element.apasinDOI());
        }
        return resultExport;
    }
}
exports.Gestor = Gestor;
;

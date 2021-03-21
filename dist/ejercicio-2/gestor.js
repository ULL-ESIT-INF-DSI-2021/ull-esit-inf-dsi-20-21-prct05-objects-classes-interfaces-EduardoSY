"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestor = void 0;
class Gestor {
    constructor(articulo1, ...articulos) {
        this.listaArticulos = [];
        this.listaArticulos.push(articulo1);
        for (let element of articulos) {
            this.listaArticulos.push(element);
        }
    }
    imprimirTabla() {
        console.table(this.listaArticulos);
    }
    getSizeGestor() {
        return this.listaArticulos.length;
    }
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

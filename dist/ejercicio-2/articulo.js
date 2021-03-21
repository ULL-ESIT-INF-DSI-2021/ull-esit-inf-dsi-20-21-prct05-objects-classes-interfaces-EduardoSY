"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
class Articulo {
    constructor(titulo, autor, email, keywords, resumen, fecha, editorial, citas) {
        this.titulo = titulo;
        this.autor = autor;
        this.email = email;
        this.claves = keywords;
        this.resumen = resumen;
        this.fecha = fecha;
        this.editorial = editorial;
        this.citas = citas;
    }
    getTitulo() {
        return this.titulo;
    }
    getEmail() {
        return this.email;
    }
    getClaves() {
        return this.claves;
    }
    getResumen() {
        return this.resumen;
    }
    getFecha() {
        return this.fecha;
    }
    getEditorial() {
        return this.editorial;
    }
    getCitas() {
        return this.citas;
    }
    getAutor() {
        return this.autor;
    }
    apasinDOI() {
        let resultado = '';
        for (let i = 0; i < this.getAutor().length; i++) {
            let autorAux = this.getAutor()[i].split(" ");
            resultado += autorAux[1] + ", " + autorAux[0][0] + ". ";
            if (i < this.getAutor().length - 1) {
                resultado += "& ";
            }
        }
        resultado += "(" + this.getFecha() + "). ";
        resultado += this.getTitulo() + ". ";
        resultado += this.getEditorial() + ".";
        return resultado;
    }
}
exports.Articulo = Articulo;
;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
/**
 * Clase Articulo. Describe como es un articulo d revista
 */
class Articulo {
    /**
     * Constructor de la clase
     * @param titulo Nombre del articulo
     * @param autor Array. Nombre o nombres de los autores
     * @param email Correo de los autores
     * @param keywords Array. Palabras por las que puede ser encontrado el artic.
     * @param resumen Resumen del articulo
     * @param fecha Fecha de publicacion
     * @param editorial Editorial de publicacion
     * @param citas Cantidad de citas del articulo
     */
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
    /**
     * Getter titulo
     * @returns Titulo
     */
    getTitulo() {
        return this.titulo;
    }
    /**
     * Getter email
     * @returns email
     */
    getEmail() {
        return this.email;
    }
    /**
     * Getter claves
     * @returns claves
     */
    getClaves() {
        return this.claves;
    }
    /**
     * Getter resumen
     * @returns resumen
     */
    getResumen() {
        return this.resumen;
    }
    /**
     * Getter fecha
     * @returns fecha
     */
    getFecha() {
        return this.fecha;
    }
    /**
     * Getter editorial
     * @returns editorial
     */
    getEditorial() {
        return this.editorial;
    }
    /**
     * Getter Citas
     * @returns citas
     */
    getCitas() {
        return this.citas;
    }
    /**
     * Getter autor
     * @returns autor
     */
    getAutor() {
        return this.autor;
    }
    /**
     * Transforma la informacion del articulo a formato APA.
     * @returns String del articulo en formato APA
     */
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

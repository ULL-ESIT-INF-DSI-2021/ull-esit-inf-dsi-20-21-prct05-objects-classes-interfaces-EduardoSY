/**
 * Clase Articulo. Describe como es un articulo d revista
 */
export class Articulo {
  private titulo: string;
  private autor: string[];
  private email: string[];
  private claves: string[];
  private resumen: string;
  private fecha: string;
  private editorial: string;
  private citas: number;
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
  constructor(titulo: string, autor: string[], email: string[],
      keywords: string[], resumen: string, fecha: string, editorial: string,
      citas: number) {
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
  public getTitulo() {
    return this.titulo;
  }
  /**
   * Getter email
   * @returns email
   */
  public getEmail() {
    return this.email;
  }
  /**
   * Getter claves
   * @returns claves
   */
  public getClaves() {
    return this.claves;
  }
  /**
   * Getter resumen
   * @returns resumen
   */
  public getResumen() {
    return this.resumen;
  }
  /**
   * Getter fecha
   * @returns fecha
   */
  public getFecha() {
    return this.fecha;
  }
  /**
   * Getter editorial
   * @returns editorial
   */
  public getEditorial() {
    return this.editorial;
  }
  /**
   * Getter Citas
   * @returns citas
   */
  public getCitas() {
    return this.citas;
  }
  /**
   * Getter autor
   * @returns autor
   */
  public getAutor() {
    return this.autor;
  }
  /**
   * Transforma la informacion del articulo a formato APA.
   * @returns String del articulo en formato APA
   */
  public apasinDOI(): string {
    let resultado: string = '';
    for (let i = 0; i < this.getAutor().length; i++) {
      let autorAux: string[] = this.getAutor()[i].split(" ");
      resultado += autorAux[1] + ", " + autorAux[0][0] + ". ";
      if (i < this.getAutor().length - 1) {
        resultado += "y ";
      }
    }

    resultado += "(" + this.getFecha() + "). ";
    resultado += this.getTitulo() + ". ";
    resultado += this.getEditorial() + ".";
    return resultado;
  }
};

export class Articulo {
  private titulo: string;
  private autor: string[];
  private email: string[];
  private claves: string[];
  private resumen: string;
  private fecha: string;
  private editorial: string;
  private citas: number;
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
  public getTitulo() {
    return this.titulo;
  }
  public getEmail() {
    return this.email;
  }
  public getClaves() {
    return this.claves;
  }
  public getResumen() {
    return this.resumen;
  }
  public getFecha() {
    return this.fecha;
  }
  public getEditorial() {
    return this.editorial;
  }
  public getCitas() {
    return this.citas;
  }
  public getAutor() {
    return this.autor;
  }

  public apasinDOI(): string {
    let resultado: string = '';
    for (let i = 0; i < this.getAutor().length; i++) {
      let autorAux: string[] = this.getAutor()[i].split(" ");
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
};

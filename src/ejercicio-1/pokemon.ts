export class Pokemon {
  private nombre: string;
  private peso: number;
  private altura: number;
  private tipo: string;
  private stats = new Array(4);
  public hpCombate: number = 0;

  constructor(nombreEntrada: string, pesoEntrada: number,
      alturaEntrada: number, tipoEntrada: string,
      statsEntrada: number[]) {
    this.nombre = nombreEntrada;
    this.peso = pesoEntrada;
    this.altura = alturaEntrada;
    this.tipo = tipoEntrada;
    this.stats = statsEntrada;
    this.hpCombate = this.stats[3];
  }

  getName() {
    return this.nombre;
  }
  getType() {
    return this.tipo;
  }
  getAttack() {
    return this.stats[0];
  }
  getDef() {
    return this.stats[1];
  }
  getMaxHP() {
    return this.stats[3];
  }
  getAltura() {
    return this.altura;
  }
  getPeso() {
    return this.peso;
  }

  showData() {
    console.log("Pokemon -> " + this.getName() + " Tipo: " +
    this.getType() + " Atk. " + this.getAttack() + " Def. " +
    this.getDef() + " HP. " + this.getMaxHP());
  }
};
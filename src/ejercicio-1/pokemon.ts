export class Pokemon {
  private nombre: string;
  private peso: number;
  private altura: number;
  private tipo: string;
  private stats = new Array(4);
  public hp_combate: number = 0;

  constructor(public readonly nombre_entrada: string,
  public readonly peso_entrada: number, public readonly altura_entrada: number,
  public readonly tipo_entrada: string,
  public readonly stats_entrada: number[]) {
    this.nombre = nombre_entrada;
    this.peso = peso_entrada;
    this.altura = altura_entrada;
    this.tipo = tipo_entrada;
    this.stats = stats_entrada;
    this.hp_combate = this.stats[3];
  }

  get_name() {
    return this.nombre;
  }
  get_type() {
    return this.tipo;
  }
  get_attack() {
    return this.stats[0];
  }
  get_def() {
    return this.stats[1];
  }
  get_maxHP() {
    return this.stats[3];
  }
};
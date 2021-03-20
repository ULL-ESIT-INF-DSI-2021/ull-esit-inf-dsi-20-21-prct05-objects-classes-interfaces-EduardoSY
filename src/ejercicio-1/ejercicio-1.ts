import {Pokemon} from './pokemon';
import {Combat} from './combat';

let poke1: Pokemon = new Pokemon("Pikachu", 6, 4, "Electrico", [54, 22,
  4, 265]);
let poke2: Pokemon = new Pokemon("Magikarp", 6, 4, "Agua", [3, 46, 4, 575]);
let combate :Combat = new Combat(poke1, poke2);
poke1.showData();
poke2.showData();
combate.combatir();
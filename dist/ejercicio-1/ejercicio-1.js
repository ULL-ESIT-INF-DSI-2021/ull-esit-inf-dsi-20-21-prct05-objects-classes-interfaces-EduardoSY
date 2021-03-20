"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_1 = require("./pokemon");
const combat_1 = require("./combat");
let poke1 = new pokemon_1.Pokemon("Pikachu", 6, 4, "Electrico", [54, 22,
    4, 265]);
let poke2 = new pokemon_1.Pokemon("Magikarp", 6, 4, "Agua", [3, 46, 4, 575]);
let combate = new combat_1.Combat(poke1, poke2);
poke1.showData();
poke2.showData();
combate.combatir();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lavadora_1 = require("./lavadora");
const tele_1 = require("./tele");
const tele1 = new tele_1.Television(150, 20, "blanco", "A", 60, true);
const tele2 = new tele_1.Television(90, 10, "azul", "A", 40, false);
const lavadora1 = new lavadora_1.Lavadora(180, 60, "blanco", "B", 30);
const lavadora2 = new lavadora_1.Lavadora(120, 120, "azul", "B", 40);
const lavadora3 = new lavadora_1.Lavadora(130, 40, "blanco", "B", 10);
let cosas = [tele1, tele2,
    lavadora1, lavadora2, lavadora3];
let aux_lavadoras = [];
for (let element of cosas) {
    if ("GetRes" in element) {
        console.log("Television con precio -> " + element.GetPrecio());
    }
    else {
        aux_lavadoras.push(element);
    }
    // Ordeno el array con las lavadoras segun precio y lo muestro
    aux_lavadoras.sort(function (a, b) {
        return a.GetPrecio() - b.GetPrecio();
    });
    for (let element_lava of aux_lavadoras) {
        console.log("Lavadora con precio -> " + element_lava.GetPrecio());
    }
}

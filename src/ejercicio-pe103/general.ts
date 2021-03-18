import {Lavadora} from './lavadora';
import {Television} from './tele';

const tele1: Television = new Television(150, 20, "blanco", "A", 60, true);
const tele2: Television = new Television(90, 10, "azul", "A", 40, false);
const lavadora1: Lavadora = new Lavadora(180, 60, "blanco", "B", 30);
const lavadora2: Lavadora = new Lavadora(120, 120, "azul", "B", 40);
const lavadora3: Lavadora = new Lavadora(130, 40, "blanco", "B", 10);

let cosas: (Television|Lavadora)[] = [tele1, tele2,
  lavadora1, lavadora2, lavadora3];

let aux_lavadoras: Lavadora[] = [];

for (let element of cosas) {
    if ("GetRes" in element) {
        console.log("Television con precio -> " + element.GetPrecio());
    } else {
        aux_lavadoras.push(element);
    }
    
}

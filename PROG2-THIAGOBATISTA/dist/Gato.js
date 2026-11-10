"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    emitirSom() {
        console.log("Miau!");
    }
    descreverCuidados() {
        console.log("Precisa de arranhador.");
    }
}
exports.Gato = Gato;
//# sourceMappingURL=Gato.js.map
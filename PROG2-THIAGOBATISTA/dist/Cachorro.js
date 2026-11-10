"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    emitirSom() {
        console.log("Au au!");
    }
    descreverCuidados() {
        console.log("Precisa de passeio diário.");
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map
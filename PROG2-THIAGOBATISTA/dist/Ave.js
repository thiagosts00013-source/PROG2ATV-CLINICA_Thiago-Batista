"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const Animal_1 = require("./Animal");
class Ave extends Animal_1.Animal {
    emitirSom() {
        console.log("A ave está cantando!");
    }
    descreverCuidados() {
        console.log("Precisa de gaiola.");
    }
}
exports.Ave = Ave;
//# sourceMappingURL=Ave.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    animal;
    veterinario;
    data;
    constructor(animal, veterinario, data) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    get getAnimal() {
        return this.animal;
    }
    get getVeterinario() {
        return this.veterinario;
    }
    get getData() {
        return this.data;
    }
    set setData(data) {
        this.data = data;
    }
    descreverConsulta() {
        console.log("Animal: " + this.animal.getNome);
        console.log("Veterinário: " + this.veterinario.getNome);
        console.log("Data: " + this.data.toLocaleDateString());
    }
}
exports.Consulta = Consulta;
//# sourceMappingURL=Consulta.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
class Clinica {
    animais;
    funcionarios;
    constructor() {
        this.animais = [];
        this.funcionarios = [];
    }
    get getAnimais() {
        return this.animais;
    }
    get getFuncionarios() {
        return this.funcionarios;
    }
    cadastrarAnimal(animal) {
        this.animais.push(animal);
        console.log("Animal cadastrado!");
    }
    cadastrarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        console.log("Funcionário cadastrado!");
    }
    listarAnimais() {
        for (let animal of this.animais) {
            console.log(animal.getNome);
        }
    }
    listarFuncionarios() {
        for (let funcionario of this.funcionarios) {
            console.log(funcionario.getNome);
        }
    }
}
exports.Clinica = Clinica;
//# sourceMappingURL=Clinica.js.map
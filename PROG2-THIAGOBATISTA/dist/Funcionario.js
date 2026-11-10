"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getMatricula() {
        return this.matricula;
    }
    set setMatricula(matricula) {
        this.matricula = matricula;
    }
    get getSalario() {
        return this.salario;
    }
    set setSalario(salario) {
        if (salario > 0) {
            this.salario = salario;
        }
        else {
            console.log("Salário inválido!");
        }
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=Funcionario.js.map
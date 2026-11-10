"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinario = void 0;
const Funcionario_1 = require("./Funcionario");
class Veterinario extends Funcionario_1.Funcionario {
    consultasRealizadas;
    constructor(nome, matricula, salario, consultasRealizadas) {
        super(nome, matricula, salario);
        this.consultasRealizadas = consultasRealizadas;
    }
    get getConsultasRealizadas() {
        return this.consultasRealizadas;
    }
    set setConsultasRealizadas(consultas) {
        if (consultas >= 0) {
            this.consultasRealizadas = consultas;
        }
    }
    realizarConsulta() {
        this.consultasRealizadas++;
        console.log("Consulta realizada!");
    }
    prescreverTratamento() {
        console.log("Tratamento prescrito!");
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
}
exports.Veterinario = Veterinario;
//# sourceMappingURL=Veterinario.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = void 0;
const Funcionario_1 = require("./Funcionario");
class Recepcionista extends Funcionario_1.Funcionario {
    agendamentosConfirmados;
    constructor(nome, matricula, salario, agendamentosConfirmados) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = agendamentosConfirmados;
    }
    get getAgendamentosConfirmados() {
        return this.agendamentosConfirmados;
    }
    set setAgendamentosConfirmados(agendamentos) {
        if (agendamentos >= 0) {
            this.agendamentosConfirmados = agendamentos;
        }
    }
    agendarAtendimento() {
        this.agendamentosConfirmados++;
        console.log("Atendimento agendado!");
    }
    calcularBonus() {
        return this.agendamentosConfirmados * 10;
    }
}
exports.Recepcionista = Recepcionista;
//# sourceMappingURL=Recepcionista.js.map
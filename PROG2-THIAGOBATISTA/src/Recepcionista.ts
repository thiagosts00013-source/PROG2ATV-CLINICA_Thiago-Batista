import { Funcionario } from "./Funcionario";

export class Recepcionista extends Funcionario {
    private agendamentosConfirmados: number;

    constructor(
        nome: string,
        matricula: string,
        salario: number,
        agendamentosConfirmados: number
    ) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = agendamentosConfirmados;
    }

    get getAgendamentosConfirmados(): number {
        return this.agendamentosConfirmados;
    }

    set setAgendamentosConfirmados(agendamentos: number) {
        if (agendamentos >= 0) {
            this.agendamentosConfirmados = agendamentos;
        }
    }

    agendarAtendimento(): void {
        this.agendamentosConfirmados++;
        console.log("Atendimento agendado!");
    }

    calcularBonus(): number {
        return this.agendamentosConfirmados * 10;
    }
}
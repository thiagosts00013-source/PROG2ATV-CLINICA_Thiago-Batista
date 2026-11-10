import { Funcionario } from "./Funcionario";
export declare class Recepcionista extends Funcionario {
    private agendamentosConfirmados;
    constructor(nome: string, matricula: string, salario: number, agendamentosConfirmados: number);
    get getAgendamentosConfirmados(): number;
    set setAgendamentosConfirmados(agendamentos: number);
    agendarAtendimento(): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Recepcionista.d.ts.map
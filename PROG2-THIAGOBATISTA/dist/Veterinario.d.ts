import { Funcionario } from "./Funcionario";
export declare class Veterinario extends Funcionario {
    private consultasRealizadas;
    constructor(nome: string, matricula: string, salario: number, consultasRealizadas: number);
    get getConsultasRealizadas(): number;
    set setConsultasRealizadas(consultas: number);
    realizarConsulta(): void;
    prescreverTratamento(): void;
    calcularBonus(): number;
}
//# sourceMappingURL=Veterinario.d.ts.map
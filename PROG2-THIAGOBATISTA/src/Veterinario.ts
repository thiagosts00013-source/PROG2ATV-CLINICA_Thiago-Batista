import { Funcionario } from "./Funcionario";

export class Veterinario extends Funcionario {
    private consultasRealizadas: number;

    constructor(
        nome: string,matricula: string,salario: number,consultasRealizadas: number) {
        super(nome, matricula, salario);
        this.consultasRealizadas = consultasRealizadas;
    }

    get getConsultasRealizadas(): number {
        return this.consultasRealizadas;
    }

    set setConsultasRealizadas(consultas: number) {
        if (consultas >= 0) {
            this.consultasRealizadas = consultas;
        }
    }

    realizarConsulta(): void {
        this.consultasRealizadas++;
        console.log("Consulta realizada!");
    }

    prescreverTratamento(): void {
        console.log("Tratamento prescrito!");
    }

    calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }
}
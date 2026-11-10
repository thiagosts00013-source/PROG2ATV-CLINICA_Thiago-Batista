export abstract class Funcionario {
    private nome: string;
    private matricula: string;
    private salario: number;

    constructor(nome: string, matricula: string, salario: number) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    get getNome(): string {
        return this.nome;
    }

    set setNome(nome: string) {
        this.nome = nome;
    }

    get getMatricula(): string {
        return this.matricula;
    }

    set setMatricula(matricula: string) {
        this.matricula = matricula;
    }

    get getSalario(): number {
        return this.salario;
    }

    set setSalario(salario: number) {
        if (salario > 0) {
            this.salario = salario;
        } else {
            console.log("Salário inválido!");
        }
    }

    abstract calcularBonus(): number;
}
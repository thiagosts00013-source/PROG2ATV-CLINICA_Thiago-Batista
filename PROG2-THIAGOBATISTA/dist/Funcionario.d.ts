export declare abstract class Funcionario {
    private nome;
    private matricula;
    private salario;
    constructor(nome: string, matricula: string, salario: number);
    get getNome(): string;
    set setNome(nome: string);
    get getMatricula(): string;
    set setMatricula(matricula: string);
    get getSalario(): number;
    set setSalario(salario: number);
    abstract calcularBonus(): number;
}
//# sourceMappingURL=Funcionario.d.ts.map
export declare abstract class Animal {
    private nome;
    private idade;
    private tutor;
    constructor(nome: string, idade: number, tutor: string);
    get getNome(): string;
    set setNome(nome: string);
    get getIdade(): number;
    set setIdade(idade: number);
    get getTutor(): string;
    set setTutor(tutor: string);
    abstract emitirSom(): void;
    abstract descreverCuidados(): void;
}
//# sourceMappingURL=Animal.d.ts.map
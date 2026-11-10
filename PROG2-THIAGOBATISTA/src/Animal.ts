export abstract class Animal {
    private nome: string;
    private idade: number;
    private tutor: string;

    constructor(nome: string, idade: number, tutor: string) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }

    get getNome(): string {
        return this.nome;
    }

    set setNome(nome: string) {
        this.nome = nome;
    }

    get getIdade(): number {
        return this.idade;
    }

    set setIdade(idade: number) {
        if (idade >= 0) {
            this.idade = idade;
        }
    }

    get getTutor(): string {
        return this.tutor;
    }

    set setTutor(tutor: string) {
        this.tutor = tutor;
    }

    abstract emitirSom(): void;
    abstract descreverCuidados(): void;
}
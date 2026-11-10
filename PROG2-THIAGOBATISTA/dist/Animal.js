"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getIdade() {
        return this.idade;
    }
    set setIdade(idade) {
        if (idade >= 0) {
            this.idade = idade;
        }
    }
    get getTutor() {
        return this.tutor;
    }
    set setTutor(tutor) {
        this.tutor = tutor;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map
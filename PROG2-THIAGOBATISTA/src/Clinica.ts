import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";

export class Clinica {
    private animais: Animal[];
    private funcionarios: Funcionario[];

    constructor() {
        this.animais = [];
        this.funcionarios = [];
    }

    get getAnimais(): Animal[] {
        return this.animais;
    }

    get getFuncionarios(): Funcionario[] {
        return this.funcionarios;
    }

    cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
        console.log("Animal cadastrado!");
    }

    cadastrarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log("Funcionário cadastrado!");
    }

    listarAnimais(): void {
        for (let animal of this.animais) {
            console.log(animal.getNome);
        }
    }

    listarFuncionarios(): void {
        for (let funcionario of this.funcionarios) {
            console.log(funcionario.getNome);
        }
    }
}
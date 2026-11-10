import { Animal } from "./Animal";
import { Funcionario } from "./Funcionario";
export declare class Clinica {
    private animais;
    private funcionarios;
    constructor();
    get getAnimais(): Animal[];
    get getFuncionarios(): Funcionario[];
    cadastrarAnimal(animal: Animal): void;
    cadastrarFuncionario(funcionario: Funcionario): void;
    listarAnimais(): void;
    listarFuncionarios(): void;
}
//# sourceMappingURL=Clinica.d.ts.map
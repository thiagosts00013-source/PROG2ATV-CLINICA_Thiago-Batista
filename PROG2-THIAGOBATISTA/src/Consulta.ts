import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {
    private animal: Animal;
    private veterinario: Veterinario;
    private data: Date;

    constructor(animal: Animal, veterinario: Veterinario, data: Date) {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }

    get getAnimal(): Animal {
        return this.animal;
    }

    get getVeterinario(): Veterinario {
        return this.veterinario;
    }

    get getData(): Date {
        return this.data;
    }

    set setData(data: Date) {
        this.data = data;
    }

    descreverConsulta(): void {
        console.log("Animal: " + this.animal.getNome);
        console.log("Veterinário: " + this.veterinario.getNome);
        console.log("Data: " + this.data.toLocaleDateString());
    }
}
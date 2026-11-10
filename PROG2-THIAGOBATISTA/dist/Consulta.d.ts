import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";
export declare class Consulta {
    private animal;
    private veterinario;
    private data;
    constructor(animal: Animal, veterinario: Veterinario, data: Date);
    get getAnimal(): Animal;
    get getVeterinario(): Veterinario;
    get getData(): Date;
    set setData(data: Date);
    descreverConsulta(): void;
}
//# sourceMappingURL=Consulta.d.ts.map
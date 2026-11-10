import { Animal } from "./Animal";

export class Cachorro extends Animal {

    emitirSom(): void {
        console.log("Au au!");
    }

    descreverCuidados(): void {
        console.log("Precisa de passeio diário.");
    }
}
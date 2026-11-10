import { Animal } from "./Animal";

export class Ave extends Animal {

    emitirSom(): void {
        console.log("A ave está cantando!");
    }

    descreverCuidados(): void {
        console.log("Precisa de gaiola.");
    }
}
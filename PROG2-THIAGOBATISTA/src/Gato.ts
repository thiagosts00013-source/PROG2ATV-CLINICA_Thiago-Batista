import { Animal } from "./Animal";

export class Gato extends Animal {

    emitirSom(): void {
        console.log("Miau!");
    }

    descreverCuidados(): void {
        console.log("Precisa de arranhador.");
    }
}
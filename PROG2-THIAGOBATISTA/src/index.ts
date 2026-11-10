import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Ave } from "./Ave";

import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";

import { Consulta } from "./consulta";
import { Clinica } from "./clinica";


let c1 = new Cachorro("Rex", 3, "João");
let g1 = new Gato("Mimi", 2, "Maria");
let a1 = new Ave("Piu", 1, "Carlos");


let v1 = new Veterinario("Pedro", "001", 5000, 10);
let r1 = new Recepcionista("Ana", "002", 2000, 20);


let consulta1 = new Consulta(c1, v1, new Date());


let clinica1 = new Clinica();
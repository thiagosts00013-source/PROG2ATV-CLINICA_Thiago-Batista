"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
const Gato_1 = require("./Gato");
const Ave_1 = require("./Ave");
const Veterinario_1 = require("./Veterinario");
const Recepcionista_1 = require("./Recepcionista");
const consulta_1 = require("./consulta");
const clinica_1 = require("./clinica");
// Animais
let c1 = new Cachorro_1.Cachorro("Rex", 3, "João");
let g1 = new Gato_1.Gato("Mimi", 2, "Maria");
let a1 = new Ave_1.Ave("Piu", 1, "Carlos");
// Funcionários
let v1 = new Veterinario_1.Veterinario("Pedro", "001", 5000, 10);
let r1 = new Recepcionista_1.Recepcionista("Ana", "002", 2000, 20);
// Consulta
let consulta1 = new consulta_1.Consulta(c1, v1, new Date());
// Clínica
let clinica1 = new clinica_1.Clinica();
//# sourceMappingURL=index.js.map
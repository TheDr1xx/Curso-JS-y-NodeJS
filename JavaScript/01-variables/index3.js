// 🔤 VARIABLES EN JAVASCRIPT - PARTE 3
// Tipos de datos compuestos: objetos y arrays

// ----------------------------------------------------------
// 1️⃣ Objetos en JavaScript
// ----------------------------------------------------------
// Son colecciones de pares clave-valor.
// Ideales para agrupar datos relacionados.

const persona = {
  nombre: "María",
  edad: 30,
  ciudad: "Montevideo",
};

console.log("Objeto persona:", persona);

// Acceder a propiedades
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona["edad"]);

// Modificar propiedades
persona.edad = 31;
console.log("Edad modificada:", persona.edad);

// Agregar propiedades nuevas
persona.profesion = "Desarrolladora";
console.log("Objeto actualizado:", persona);

// ----------------------------------------------------------
// 2️⃣ Arrays en JavaScript
// ----------------------------------------------------------
// Listas ordenadas de valores.

const frutas = ["manzana", "banana", "naranja"];
console.log("Array frutas:", frutas);

// Acceder a elementos
console.log("Primera fruta:", frutas[0]);

// Modificar elementos
frutas[1] = "pera";
console.log("Array modificado:", frutas);

// Agregar elementos
frutas.push("kiwi");
console.log("Array con nuevo elemento:", frutas);

// ----------------------------------------------------------
// 3️⃣ Objetos y arrays combinados
// ----------------------------------------------------------

const curso = {
  nombre: "JavaScript Básico",
  duracion: 20,
  temas: ["variables", "funciones", "objetos", "arrays"],
};

console.log("Curso:", curso);
console.log("Tema 3:", curso.temas[2]);

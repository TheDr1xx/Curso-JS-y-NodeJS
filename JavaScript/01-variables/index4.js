// 🔤 VARIABLES EN JAVASCRIPT - PARTE 4
// Condicionales y operadores lógicos

// ----------------------------------------------------------
// 1️⃣ Condicional if, else if, else
// ----------------------------------------------------------

let edad = 20;

if (edad < 18) {
  console.log("Eres menor de edad");
} else if (edad >= 18 && edad < 65) {
  console.log("Eres adulto");
} else {
  console.log("Eres adulto mayor");
}

// ----------------------------------------------------------
// 2️⃣ Operadores lógicos
// ----------------------------------------------------------

// && = AND (y)
// || = OR (o)
// !  = NOT (no)

let tieneLicencia = true;
let edadConducir = 18;

if (edad >= edadConducir && tieneLicencia) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}

// ----------------------------------------------------------
// 3️⃣ Operador ternario
// ----------------------------------------------------------

// Es una forma compacta de hacer if else

let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log("Resultado:", resultado);

// ----------------------------------------------------------
// 4️⃣ Switch (para múltiples casos)
// ----------------------------------------------------------

let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Otro día");
}

// 🔤 VARIABLES EN JAVASCRIPT - PARTE 2

// ----------------------------------------------------------
// 1️⃣ Scope (alcance) de las variables: var vs let/const
// ----------------------------------------------------------

// var tiene scope de función o global
function ejemploVar() {
  if (true) {
    var x = 10;
    console.log("Dentro del if, x =", x); // 10
  }
  console.log("Fuera del if, x =", x); // 10 - var no respeta bloque if
}
ejemploVar();

// let y const tienen scope de bloque (más seguro)
function ejemploLetConst() {
  if (true) {
    let y = 20;
    const z = 30;
    console.log("Dentro del if, y =", y); // 20
    console.log("Dentro del if, z =", z); // 30
  }
  // console.log(y); // Error: y no está definido fuera del bloque if
  // console.log(z); // Error: z no está definido fuera del bloque if
}
ejemploLetConst();

// ----------------------------------------------------------
// 2️⃣ Redeclaración: var vs let/const
// ----------------------------------------------------------

var a = 1;
var a = 2; // ✅ var permite redeclarar sin error
console.log("var redeclarado:", a); // 2

let b = 3;
// let b = 4; // ❌ Error: Identifier 'b' has already been declared

const c = 5;
// const c = 6; // ❌ Error: Identifier 'c' has already been declared

// ----------------------------------------------------------
// 3️⃣ Hoisting: qué significa y cómo afecta var, let y const
// ----------------------------------------------------------

// Hoisting es el comportamiento donde las declaraciones de variables se “levantan”
// al inicio del contexto (función o global) antes de ejecutar el código.

// Ejemplo con var:
console.log(d); // undefined (la declaración se "levantó", pero no la asignación)
var d = 7;

// Ejemplo con let:
try {
  console.log(e); // ReferenceError: Cannot access 'e' before initialization
  let e = 8;
} catch (error) {
  console.log("Error con let:", error.message);
}

// Ejemplo con const:
try {
  console.log(f); // ReferenceError: Cannot access 'f' before initialization
  const f = 9;
} catch (error) {
  console.log("Error con const:", error.message);
}

// ----------------------------------------------------------
// 4️⃣ Buenas prácticas con variables
// ----------------------------------------------------------

// - Usar const por defecto, solo usar let si el valor cambia
// - Evitar var para prevenir errores de scope
// - Declarar variables lo más cerca posible de donde se usan
// - Nombrar variables con nombres descriptivos y camelCase

// Ejemplo recomendado:
const nombreUsuario = "Ana";
let puntaje = 100;
puntaje += 20;
console.log(nombreUsuario, puntaje);

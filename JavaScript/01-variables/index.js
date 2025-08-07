// 🔤 DECLARACIÓN DE VARIABLES EN JAVASCRIPT
// En JavaScript existen tres maneras principales de declarar variables: var, let y const.
// Cada una tiene sus diferencias, y es importante entenderlas para evitar errores.

// ------------------------------------------------------------------------
// 1️⃣ var → LA ANTIGUA FORMA (NO RECOMENDADA HOY EN DÍA)
// ------------------------------------------------------------------------
// - Fue la primera forma de declarar variables en JS (antes de ES6).
// - Tiene "scope" (alcance) de función o global, lo que puede generar errores
//   si sin querer la redeclaramos en un bloque.
// - Se puede cambiar su valor y volver a declararla en el mismo ámbito (poco seguro).
// - Hoy en día se evita usarla, salvo en casos MUY específicos.
var nombre = "Carlos";
console.log("var:", nombre); // Carlos

// ------------------------------------------------------------------------
// 2️⃣ let → LA FORMA MODERNA Y FLEXIBLE
// ------------------------------------------------------------------------
// - Introducida en ES6 (2015).
// - Tiene "scope" (alcance) de bloque: solo existe dentro del bloque donde se declaró.
// - Permite cambiar su valor, pero NO permite volver a declararla en el mismo ámbito.
// - Es la opción más usada para variables que van a cambiar su valor.
let edad = 25;
console.log("let antes:", edad); // 25
edad = 26; // ✅ Podés cambiar su valor
console.log("let después:", edad); // 26
// let edad = 30; ❌ Esto daría error si lo haces en el mismo bloque

// ------------------------------------------------------------------------
// 3️⃣ const → PARA CONSTANTES (NO CAMBIAN SU REFERENCIA)
// ------------------------------------------------------------------------
// - También introducida en ES6 (2015).
// - Tiene "scope" de bloque, igual que let.
// - Su valor NO se puede reasignar.
// - OJO: si es un objeto o array, podés cambiar su contenido interno,
//   pero no podés reasignar la variable a otra cosa.
const pais = "Uruguay";
console.log("const:", pais);
// pais = "Argentina"; // ❌ Esto daría error: Assignment to constant variable

// Ejemplo con array usando const:
const frutas = ["manzana", "pera"];
frutas.push("naranja"); // ✅ Podemos modificar su contenido
console.log(frutas); // ["manzana", "pera", "naranja"]
// frutas = ["uva"]; // ❌ Esto NO se puede hacer

// ------------------------------------------------------------------------
// 📚 TIPOS DE DATOS BÁSICOS EN JAVASCRIPT
// ------------------------------------------------------------------------
// Los más comunes son:
// - String → Texto
// - Number → Números enteros o decimales
// - Boolean → true o false
// - Undefined → Sin valor asignado
// - Null → Valor vacío intencionalmente
// - Object → Estructuras de datos
let texto = "Hola mundo";    // String
let numero = 42;             // Number
let decimal = 3.14;          // Number (decimal)
let esVerdadero = true;      // Boolean
let indefinido = undefined;  // Undefined
let nulo = null;             // Null

// ------------------------------------------------------------------------
// 🔎 MOSTRAR EL TIPO DE DATO CON typeof
// ------------------------------------------------------------------------
console.log(typeof texto);       // "string"
console.log(typeof numero);      // "number"
console.log(typeof decimal);     // "number"
console.log(typeof esVerdadero); // "boolean"
console.log(typeof indefinido);  // "undefined"
console.log(typeof nulo);        // "object" ← Esto es un bug histórico de JS

// ------------------------------------------------------------------------
// 🤯 JAVASCRIPT ES DE TIPADO DINÁMICO
// ------------------------------------------------------------------------
// Esto significa que una variable puede cambiar de tipo en cualquier momento
// sin dar error.
let algo = "Soy texto"; // string
console.log(algo);
algo = 123; // ahora es number
console.log(algo);

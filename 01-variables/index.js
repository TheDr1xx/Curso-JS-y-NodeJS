// 🔤 Declaración de variables en JavaScript

// ▶️ Usando var (no se recomienda en la mayoría de los casos)
var nombre = "Carlos";
console.log("var:", nombre);

// ▶️ Usando let (permite cambiar el valor)
let edad = 25;
console.log("let antes:", edad);
edad = 26;
console.log("let después:", edad);

// ▶️ Usando const (NO permite cambiar el valor)
const pais = "Uruguay";
console.log("const:", pais);

// 🚫 Esto da error porque const no puede reasignarse
// pais = "Argentina"; // Descomentá esto para ver el error

// 📚 Tipos de datos básicos
let texto = "Hola mundo";          // String (texto)
let numero = 42;                   // Number
let decimal = 3.14;                // Number (decimal)
let esVerdadero = true;           // Boolean
let indefinido = undefined;       // Undefined
let nulo = null;                  // Null

// 🔎 Mostrar los tipos de datos
console.log(typeof texto);        // "string"
console.log(typeof numero);       // "number"
console.log(typeof decimal);      // "number"
console.log(typeof esVerdadero);  // "boolean"
console.log(typeof indefinido);   // "undefined"
console.log(typeof nulo);         // "object" ← rareza histórica de JS

// 🤯 JavaScript es de tipado dinámico, podés hacer esto:
let algo = "Soy texto";
console.log(algo);
algo = 123; // ahora es un número
console.log(algo);

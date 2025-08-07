// 🛠️ FUNCIONES EN JAVASCRIPT

// 1️⃣ Declaración clásica de función
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

saludar("Carlos");

// 2️⃣ Función con retorno
function sumar(a, b) {
  return a + b;
}

console.log("Suma:", sumar(5, 7));

// 3️⃣ Función anónima asignada a variable
const multiplicar = function(x, y) {
  return x * y;
};

console.log("Multiplicar:", multiplicar(3, 4));

// 4️⃣ Función flecha (arrow function)
const dividir = (x, y) => {
  if (y === 0) return "Error: división por cero";
  return x / y;
};

console.log("Dividir:", dividir(10, 2));
console.log("Dividir:", dividir(10, 0));

// 5️⃣ Función sin parámetros
function decirHola() {
  console.log("¡Hola mundo!");
}

decirHola();

// 6️⃣ Parámetros por defecto
function despedirse(nombre = "amigo") {
  console.log("Adiós, " + nombre + "!");
}

despedirse("Laura");
despedirse();

// 7️⃣ Funciones como valores (pasar función como argumento)
function procesarOperacion(a, b, operacion) {
  return operacion(a, b);
}

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;

console.log("Procesar suma:", procesarOperacion(10, 5, suma));
console.log("Procesar resta:", procesarOperacion(10, 5, resta));

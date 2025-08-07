// 🔤 VARIABLES EN JAVASCRIPT - PARTE 5
// Bucles (loops)

// ----------------------------------------------------------
// 1️⃣ Bucle for clásico
// ----------------------------------------------------------

for (let i = 0; i < 5; i++) {
  console.log("for:", i);
}

// ----------------------------------------------------------
// 2️⃣ Bucle while
// ----------------------------------------------------------

let contador = 0;
while (contador < 3) {
  console.log("while:", contador);
  contador++;
}

// ----------------------------------------------------------
// 3️⃣ Bucle do...while
// ----------------------------------------------------------

let num = 0;
do {
  console.log("do...while:", num);
  num++;
} while (num < 2);

// ----------------------------------------------------------
// 4️⃣ Bucle for...of (para arrays)
// ----------------------------------------------------------

const frutas = ["manzana", "pera", "naranja"];

for (const fruta of frutas) {
  console.log("for...of:", fruta);
}

// ----------------------------------------------------------
// 5️⃣ Bucle for...in (para objetos)
// ----------------------------------------------------------

const persona = {
  nombre: "Juan",
  edad: 28,
  ciudad: "Buenos Aires",
};

for (const clave in persona) {
  console.log(`for...in: ${clave} = ${persona[clave]}`);
}

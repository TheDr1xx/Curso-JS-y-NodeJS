// 🌍 ÁMBITO DE LAS FUNCIONES (SCOPE)

let nombre = "Pedro"; // variable global

function mostrarNombre() {
  let nombre = "María"; // variable local
  console.log("Dentro de la función:", nombre);
}

mostrarNombre();
console.log("Fuera de la función:", nombre);

// ⚡ Importante: las variables dentro de una función no afectan a las globales

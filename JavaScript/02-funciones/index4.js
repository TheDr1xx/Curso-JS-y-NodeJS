// 🎁 FUNCIONES QUE RETORNAN FUNCIONES

function crearMultiplicador(multiplicador) {
  return function(numero) {
    return numero * multiplicador;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log("Duplicar 5:", duplicar(5));   // 10
console.log("Triplicar 5:", triplicar(5)); // 15

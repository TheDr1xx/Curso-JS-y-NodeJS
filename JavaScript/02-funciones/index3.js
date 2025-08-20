// 🔄 FUNCIONES ANIDADAS

function operacion(base) {
  function cuadrado(x) {
    return x * x;
  }

  function cubo(x) {
    return x * x * x;
  }

  console.log("Base:", base);
  console.log("Al cuadrado:", cuadrado(base));
  console.log("Al cubo:", cubo(base));
}

operacion(3);

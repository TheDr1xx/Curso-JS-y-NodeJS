// 🏹 FUNCIONES FLECHA AVANZADAS

// ✅ Funciones flecha con return implícito
const sumar = (a, b) => a + b;
console.log("Suma rápida:", sumar(4, 6));

// ✅ Funciones flecha con un solo parámetro
const saludar = nombre => console.log("Hola " + nombre);
saludar("Lucía");

// ✅ Usando funciones flecha en arrays (map, filter, reduce)
const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map(n => n * n);
console.log("Cuadrados:", cuadrados);

const pares = numeros.filter(n => n % 2 === 0);
console.log("Pares:", pares);

const sumaTotal = numeros.reduce((acum, n) => acum + n, 0);
console.log("Suma total:", sumaTotal);

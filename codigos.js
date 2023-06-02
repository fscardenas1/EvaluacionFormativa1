//Ejercicio 1
var nombre = "Sebas";
//Ejercicio 2
function suma(a, b) {
  return a + b;
}

var resultado = suma(8, 6);

console.log("El resultado de la suma es: " + resultado);
//Ejercicio 3
var edad = 20;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}
//Ejercicio 4
for (var i = 1; i <= 5; i++) {
  console.log(i);
}
//Ejercicio 5
function imprimirArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

var array = ["¿Cuánto es 512 + 286?", "Respuesta=798"];
imprimirArray(array);
//Codigo del Ejercicio 6 marcado en el documento
function primerElementoArray(arr) {
  return arr[0];
}

var miArray = ["Sebas", "Alexis", "Myrian", "Byron"];
var primerElemento = primerElementoArray(miArray);
console.log(primerElemento); 
//Codigo del Ejercicio 7 marcado en el documento
function imprimirElementosArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

var miArray = ["Sebas", "Alexis", "Myrian", "Byron"];
imprimirElementosArray(miArray);



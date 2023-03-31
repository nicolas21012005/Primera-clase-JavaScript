// console.log("2 + 2 = ", 2 + 2)
// imprimir una salida

// tipos de datos
// "cadena de texto o string" String
// 374 Number
// true  Boolean
// {
//     json: "json"
// }
// [] Array
// null vacio
// undefined vacio

// variable
//  let nombre = "Nicolás"

//  const deVariable = 324
// console.log(nombre, deVariable)

// deVariable = 345 no funciona porque no puedo

// = asignación
// == comparación del mismo dato
// === comparacion del mismo dato y mismo tipo
// |= si es diferente
// |== si es diferente y toma el tipo de dato
// condicionales

// === comparaciones

// un modulo sirve para sacar el sobrante de una división o para sacar un porcentaje dependiendo de la necesidad
// > mayor
// > menor
// >= mayor o igual
// <= menor o igual
// let valor = 8

// if (valor % 2 === 0){
//     console.log("el valor es par")
// }else{
//     console.log("el valor es impar")
// }
// 1. si el numero es multiplo de 3 debe imprimir "x"
// 2. si el numero es multiplo de 5 debe imprimir "d"
// 3. si el numero es multiplo de 3 y 5 debe imprimir "xd"
// let valor = 45

// if (valor % 5 === 0 && valor % 3 === 0 && valor % 9 === 0) {
//     console.log("xd")
// }else if (valor % 5 === 0){
//     console.log("d")
// }else if (valor % 3 === 0 ){
//     console.log("x")
// }

// for(let i = 0; i <= 100; i += 9 ){
//     console.log(i)
// }
// for(let i = 0; i <= 100; i += 14){
//     console.log(i)
// }
// el codigo debe imprimir la tabla del 5

// for (let i = 1; i <= 10; i++) console.log("5 x " + i + " = " + i*5)

// for(let i = 0; i <= 100; i += 9 ){
//     console.log(i)
// }

// for(let i = 0; i <= 10; i ++) console.log(`5 x ${i} = ${5 * i}`)

// utilizando for debe imprimir las 24 horas del dia en el siguiente formato "00:00" - "01:00"
// for (let i = 0; i <= 24; i ++) {
//     if (i<10)console.log(`0${i}:00`)
//     else console.log(`${i}:00`)
// }

// imprimir la salida contando de 1 hasta 100 en el siguiente formato

// separados por una ","
// en una sola linea
// el ultimo numero no tiene que tener ","
// let string = "";
// for (let i = 1; i <= 100; i++) {
//   if (i < 10) {
//     string += `0${i},`;
//   }else if (i < 100) {
//     string += `${i},`;
//   } else {
//     string += `${i}.`;
//   }
// }
// console.log(string)
// let i = "*"


// for (let i = 0; i <= 5; i++) {
//   let square= "";
//   for (let j = 0; j <= 5; j++) {
//     if (j > 0 && j < 5 && i > 0 && i < 5) {
//       square += " ";
//     } else {
//        += "*";
//     }
//   }
//   console.log(square);
// }

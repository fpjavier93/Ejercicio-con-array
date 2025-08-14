
"use strict";



const ventas = [
  { producto: "Televisor", categoria: "Electronica", monto: 1200 },
  { producto: "Laptop", categoria: "Electronica", monto: 1500 },
  { producto: "Camisa", categoria: "Ropa", monto: 500 },
  { producto: "Pantalón", categoria: "Ropa", monto: 750 },
  { producto: "Auriculares", categoria: "Electronica", monto: 800 },
  { producto: "Pizza", categoria: "Comida", monto: 400 }
];

const ventasV1 = ventas.reduce((pvalue, cvalue) => {

  if (!pvalue[cvalue.categoria]) {
    pvalue[cvalue.categoria] = { total: 0, cantidadDeVentas: 0 }
  }
  pvalue[cvalue.categoria].total += cvalue.monto;
  pvalue[cvalue.categoria].cantidadDeVentas++;

  return pvalue
}, {})
console.log(ventasV1);

console.log("************************************************");

const calificaciones = [
  { nombre: "Ana", nota: 8.5 },
  { nombre: "Luis", nota: 6.3 },
  { nombre: "Marta", nota: 9.1 },
  { nombre: "Pedro", nota: 5.4 },
  { nombre: "Lucía", nota: 7.8 }
];

const respuesta = calificaciones.reduce((pvalue, cvalue, i, array) => {
  pvalue.sumaNotas += cvalue.nota;
  if (i == array.length - 1) {
    pvalue.promedio = pvalue.sumaNotas / array.length
  }
  if (pvalue.mejor == 0 || pvalue.mejor < cvalue.nota) pvalue.mejor = cvalue.nota
  if (pvalue.peor == 0 || pvalue.peor > cvalue.nota) pvalue.peor = cvalue.nota;
  return pvalue
}, { sumaNotas: 0, mejor: 0, peor: 0, promedio: 0 });

console.log(respuesta);

console.log("************************************************");

function constructorObject (nombre, edad, sexo) {
  this.nombre = nombre;
  this.edad = parseFloat(edad);
  this.sexo = sexo;
};

const persona1 = new constructorObject("Javier", 31, "Masculino");

persona1.color = "Blanco"


console.log(persona1);


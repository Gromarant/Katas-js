/* Ejercicio bisiesto
Escriba un programa que pida un año y que escriba si es bisiesto o no.
Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.*/

const leapYear = (year) => {
  if(year % 4 === 0|| year % 400  === 0) {
    return `${year}, es un año bisiesto`;
  } else {
    return `${year}, no es año bisiesto`;
  }
}

console.log(leapYear(2009));
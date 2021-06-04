var nombre = 'Emi', apellido = 'Jin'

var nombreEnMayusculas = nombre.toUpperCase()
// EMI

var apellidoEnMinusculas = apellido.toLowerCase()
// jin

var primeraLetraDelNombre = nombre.charAt(0) 
// E

var cantidadDeLetrasDelNombre = nombre.length
// 3

nombre = 'Roberto'
// "Roberto"

cantidadDeLetrasDelNombre
// 3
// *Aunque ya cambie el nombre a ROBERTO, la cantidad de letras siguie jalando de EMI que es 3. Para actualizarlo, introduce el siguiente codigo: 

cantidadDeLetrasDelNombre = nombre.length
// 7


// Como concatenar(=連結する) strings? Hay 2 formas:

// #1
var nombreCompleto = nombre + ' ' + apellido
// #2. Es mas nueva y mejor. Usar `Conmilla invertida`
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
// "Emi JIN"


// Acceder a sub-string

var str = nombre.charAt(0) + apellido.charAt(2)
// "En" *E de Emi. n de Jin. 

var str = nombre.substr(1, 2)
// "mi"


// Desafio
let nombre = 'Emi'
let ultimaLetra = nombre[nombre.length - 1]
console.log(ultimaLetra)
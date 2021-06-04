var edad = 27

// edad = edad + 1
edad += 1
// 28

/////////

var peso = 75

// peso = peso - 2
peso -= 2
// 73

var sandwitch = 1
peso = peso + sandwitch
// 74

var jugarAlFutbol = 3
peso -= jugarAlFutbol
// 71

/////////

var precioDeVino = 200.3
var total = precioDeVino * 3
// 600.9000000000001

var total = Math.round(precioDeVino * 100 * 3) / 100
// 600.9 :redondeo

var totalStr = total.toFixed(2)
// 600.90 : hasta (2) decimales

var total2 = parseFloat(totalStr)
// 600.90 


/////////

var pizza = 8
var personas = 2
var PorcionesPorPersona = pizza / personas





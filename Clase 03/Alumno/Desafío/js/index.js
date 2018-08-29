var nom = 1
console.log(nom)


var operation = prompt('Ingresá la operacion a realizar : suma, resta , mult y div')

var numberOne = prompt('Ingresá el primer número')
var n1 = parseInt(numberOne, 10)

var numberTwo
var n2 = parseInt(numberTwo, 10)

do {
  var numberTwo = prompt('Ingresá el segundo numero')
  var n2 = parseInt(numberTwo, 10)

} while (n2 === 0 && operation === "div")

var message = "el resultado es"
var rtaSum = n1 + n2
var rtaResta = n1 - n2
var rtaMult = n1 * n2
var rtaDiv = n1 / n2


switch (operation) {
  case "suma":
    console.log(message + rtaSum)
    break
  case "resta":
    console.log(message + rtaSum)
    break
  case "mult":
    console.log(message + rtaSum)
    break
  case "div":
    console.log(message + rtaSum)
    break
}



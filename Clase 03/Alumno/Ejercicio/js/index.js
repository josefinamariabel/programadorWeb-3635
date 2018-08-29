// var nom = "josefina"
// console.log(nom)

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

var day

for (var i = 0; i < daysOfTheWeek.length; i++) {
  day = daysOfTheWeek[i]

  switch (daysOfTheWeek[i]) {
    case "Lunes":
    case "Martes":
    case "Miercoles":
    case "Miércoles":
    case "jueves":
    case "vienes":
    case "Jueves":
    case "vienes":
      console.log(day + " es un dia habil")
      break
    case "sabado":
    case "domingo":
    case "Sabado":
    case "Sábado":
    case "Domingo":
      console.log(day + " dia no habil")
      break
    default:
      console.log(day + ' dia no valido')
      break
  }
}


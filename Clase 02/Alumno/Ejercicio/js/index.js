var nombre ="josefina"
console.log(nombre)

var dia = prompt('Ingresa un dia de la Semana')

switch (dia) {
    case "lunes":
    case "Lunes":
    case "martes":
    case "Martes":
    case "miercoles":
    case "Miercoles":
    case "jueves":
    case "vienes":
    case "Jueves":
    case "vienes":

     console.log("día habil")
    
     break
     case"sabado":
     case"domingo":
     case"Sabado":
     case"Domingo":

     console.log("dia no habil")
     break

     default:
     console.log('Ingresa el dia Nuevamente')
     break



}


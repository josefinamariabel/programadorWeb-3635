var nombre = "josefina"
 console.log(nombre)



var gender = prompt('Ingresá tu género')
var age = prompt('Ingresá tu edad')
var message


switch(gender) {
    case "femenino":
    case "Femenino":
    case "fem":
    case "Fem":
    message='Sra.'
      break
    case 'Masculino':
    case 'masculino':
    case 'Masc':
     message ='Sr.'

    default:
      message ='Sx.'
      break
}

if (age>=18)
 
 {message = message +'es mayor de edad'}
 else
 {message = message +'es menor de edad'}


 console.log(message)



   
  

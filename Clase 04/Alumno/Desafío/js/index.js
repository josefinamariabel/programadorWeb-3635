
console.log("jow")

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]


var name = prompt('Ingrese un nombre')
console.log(name)


function showStudentPosition(name, studentsList) {

  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (name === student.firstName || student.lastName === name) {
      return i
    }
  }
  return -1
}

var result = showStudentPosition(name, studentsList)

console.log(result)

if (result !== -1) {
  console.log('Encontré el usuario ' + name + ' en la posición ' + result)
} else {
  console.log('No encontré al usuario ' + name)
}




































console.log("josefinita")

// // Pruebo la función
// var studentsList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']


// console.log(studentsList)

// function setLocalList(key, list) {
//   // Verifico los parámetros recibidos
//   if (typeof key === 'string' && Array.isArray(list)) {
//     // Convierto a JSON el array
//     var strList = JSON.stringify(list)
//     // Guardo en el localStorage pisando la key
//     localStorage.setItem(key, strList)
//   }
// }

// setLocalList('studentsList', studentsList)


// funcion pedida del desafio.
function getLocalList(key) {
  if (typeof key === "sting") {
    var savedList = localStorage.getItem(key)
    if (savedList) {

      var parsedList = JSON.parse(savedList)
      return parsedList
    } else {
      return []
    }

  }
}

var studentsList = getLocalList('studentsList')

if (studentsList) {
  console.log(studentsList)
  if (studentsList.length) {
    console.log('Tiene guardados ' + studentsList.length + ' estudiantes')
  } else {
    console.log('La lista esta vacía')
  }
} else {
  console.log('Le pase una key incorrecta')
}



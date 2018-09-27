console.log('JOSEFINA')

var LOCAL_KEY = 'studentList'

// Carga inicial

var studentsList = getLocalList(LOCAL_KEY)

var mainListNode = document.getElementById('mainList')

var student

for (var i = 0; i < studentsList.length; i++) {
  student = createStudentNode(studentsList[i])

  mainListNode.appendChild(student)
}

// Validar los campos nombre.

var firstNameNode = document.getElementById('firstName')

firstNameNode.onblur = validateRequiredField

var dniNode = document.getElementById('dni')

dniNode.onblur = validateDniField

// validar campo de Apellido
var lastNameNode = document.getElementById('lastName')

lastNameNode.onblur = validateOpcionalField

// validar campo del Email.

var emailNode = document.getElementById('e-mail')

emailNode.onblur = validateEmail

// Agregar el estudiante

var addStudentButtonNode = document.getElementById('addStudentButton')

addStudentButtonNode.onclick = addStudent

function addStudent() {
  var firstNameValue = firstNameNode.value
  var lastNameValue = lastNameNode.value
  var dniValue = dniNode.value
  var emailValue = emailNode.value

  var student = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    dni: dniValue,
    email: emailValue,

  }

  studentsList.push(student)

  setLocalList(LOCAL_KEY, studentsList)

  var student = createStudentNode(student)

  mainListNode.appendChild(student)

  firstName.value = ''
  lastName.value = ''
  dniNode.value = ''
  emailNode.value = ''

  addStudentButtonNode.disabled = true

  firstName.classList.remove('is-valid')
  lastName.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')
  emailNode.classList.remove('is-valid')
}


// Eliminar el estudiante.

var deleteDniNode = document.getElementById('deleteDni')

deleteDniNode.onblur = validateDeleteDni


var deleteStudentButtonNode = document.getElementById('deleteStudentButton')

deleteStudentButtonNode.onclick = deleteStudent

function deleteStudent() {
  var inputNodeDelete = document.getElementById('deleteDni')

  var index = searchStudentIndexByDni(inputNodeDelete.value, studentsList)

  studentsList.splice(index, 1)

  setLocalList(LOCAL_KEY, studentsList)

  var studentNode = document.getElementById(inputNodeDelete.value)

  mainListNode.removeChild(studentNode)
}

function validateDeleteDni(event) {
  var deleteStudentButtonNode = document.getElementById('deleteStudentButton')

  var index = searchStudentIndexByDni(event.target.value, studentsList)

  if (index > -1) {
    deleteStudentButtonNode.disabled = false
  } else {
    deleteStudentButtonNode.disabled = true
  }
}


// Funciones auxiliares

function validateSubmitButton() {
  var addStudentButtonNode = document.getElementById('addStudentButton')
  var inputFields = document.getElementsByClassName('is-valid')

  if (inputFields.length === 4) {
    addStudentButtonNode.disabled = false
  } else {
    addStudentButtonNode.disabled = true
  }
}

function validateOpcionalField(event) {
  var inputNode = event.target

  var value = inputNode.value

  if (!value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateSubmitButton()
}
function validateEmail(event) {
  var inputNode = event.target

  var value = inputNode.value

  var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!regexEmail.test(value)) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
  validateSubmitButton()
}

function validateDniField(event) {
  var inputNode = event.target

  var parsedValue = parseInt(inputNode.value, 10)

  var index = searchStudentIndexByDni(inputNode.value, studentsList)

  if (isNaN(parsedValue) || parsedValue <= 0 || index > -1) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateSubmitButton()
}

function searchStudentIndexByDni(dni, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (dni === student.dni) {
      return i
    }
  }
  return -1
}

function validateRequiredField(event) {
  var inputNode = event.target

  if (!inputNode.value) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  } else {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }

  validateSubmitButton()
}

function createStudentNode(newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    newStudent.firstName +
    ' ' +
    newStudent.lastName +
    '</h1>' +
    '<h3>DNI:' +
    newStudent.dni +
    '</h3><p class="pepe">E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

function setLocalList(key, list) {
  // Verifico los parámetros recibidos
  if (typeof key === 'string' && Array.isArray(list)) {
    // Convierto a JSON el array
    var strList = JSON.stringify(list)
    // Guardo en el localStorage pisando la key
    localStorage.setItem(key, strList)
  }
}

function getLocalList(key) {
  // Valido que reciba un string
  if (typeof key === 'string') {
    // Trato de recuperar la lista del localStorage
    var localList = localStorage.getItem(key)
    if (localList) {
      // Si la lista existía la tranformo en JavaScript y la devuelvo
      var parsedList = JSON.parse(localList)
      return parsedList
    } else {
      // Sino existía devuelvo un array vacío
      return []
    }
  }
}


//BUSCAR 

var searchStudentNode = document.getElementById('searchStudentButton')

searchStudentNode.onclick = validatesearchStudentNode

function validatesearchStudentNode(text, studentsList) {
  var student

  for (var i = 0; i < studentsList.length; i++) {
    student = studentsList[i]
    if (
      includesText(text, student.firstName) ||
      includesText(text, student.lastName)
    ) {
      return i
    }
  }
  return -1
}

function includesText(text, baseText) {
  if (typeof text === 'string' && typeof baseText === 'string') {
    var textUpperCase = text.toUpperCase()
    var baseTextUpperCase = baseText.toUpperCase()
    if (baseTextUpperCase.indexOf(textUpperCase) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// crear el li 

var studentsList = getLocalList(LOCAL_KEY)

var searchListNode = document.getElementById('searchList')

function createSearchStudentNode(searchStudent) {
  // Creo el nodo li que busque 

  var liSeachNode = document.createElement('li')

  // Le agrego el contenido al nodo
  liSeachNode.innerHTML =
    '<h1>' +
    searchStudent.firstName +
    ' ' +
    searchStudentlastName +
    '</h1>' +
    '<h3>DNI:' +
    nsearchStudent.dni +
    '</h3><p class="pepe">E-mail:' +
    searchStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liSeachNode
}



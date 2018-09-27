console.log('jowa')

var student =
{
  firstName: 'Juan',
  lastName: 'Pérez',
  dni: 45678987,
  email: 'juan@gmail.com'
}


function createNewStudentNode(newStudent) {
  var liNode = document.createElement('li')

  liNode.className = 'list-group-item'

  liNode.id = newStudent.dni

  liNode.innerHTML =
    'h1' + newStudent.firstName + ' ' + newStudent.lastName + '</h1>'

    + '<h3> Dni: ' + newStudent.dni + '</h3>'

    + '<p> Email: ' + newStudent.email + '</p>'

  return liNode

}

var listNode = document.getElementById('list')

var studentNode = createNewStudentNode(student)

listNode.appendChild(studentNode)







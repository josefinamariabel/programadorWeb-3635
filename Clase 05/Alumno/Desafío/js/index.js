console.log("joe")

function Student(firstName, lastName, dni, email) {

  var id = Math.random()

  this.firstName = firstName
  this.lastName = lastName
  this.dni = dni
  this.email = email


  this.getId = function () {
    return id
  }

  this.email = function (newemail) {
    email = newemail
  }

  this.getFullName = function () {
    if (firstName && lastName) {

      return firstName + " " + lastName

    } else if (firstName && !lastName) {

      return firstName

    } else if (!firstName && lastName) {

      return lastName

    } else {

      return ""
    }
  }
}

var students = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987,
    email: 'juan@gmail.com'
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989,
    email: 'ana@gmail.com'
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956,
    email: 'pedro@gmail.com'
  }
]

var student
var newStudent


for (var i = 0; i < students.length; i++) {
  student = students[i]

  newStudent = new Student(student.firstName, student.lastName)
  console.log(newStudent.getFullName())
}













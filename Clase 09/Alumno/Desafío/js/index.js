console.log('jowa')

var emailNode = document.getElementById('email')

emailNode.onblur = validateEmail

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
}


// EJERCICIO RESUELTO CON INDEX OF.
// console.log('hola')
// var emailNode = document.getElementById('email')

// emailNode.onblur = validateEmail

// function validateEmail (event) {
//  var inputNode = event.target

//  var value = inputNode.value

//  if (value && value.indexOf('@') !== -1 && value.indexOf('.') !== -1) {
//    inputNode.classList.add('is-valid')
//    inputNode.classList.remove('is-invalid')
//  } else {
//    inputNode.classList.add('is-invalid')
//    inputNode.classList.remove('is-valid')
//  }
// }


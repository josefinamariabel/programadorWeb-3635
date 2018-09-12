console.log('jowa')


var submitButton = document.getElementById('button')

submitButton.onclick = validateAge

function validateAge() {
  var ageNode = document.getElementById('age')

  var value = ageNode.value
  console.log(ageNode, value)
  if (value > 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

console.log('jowa')

var student =
{
  firstName: 'Juan',
  lastName: 'Pérez',
  dni: 45678987,
  email: 'juan@gmail.com'
}


//li 

var liNode = document.createElement('li')

liNode.className = 'list-group-item'

liNode.id = student.dni

var listNode = document.getElementById('list')

listNode.appendChild(liNode)

var listNode = document.getElementById('list')



//h1

var h1Node = document.createElement('h1')

h1Node.innerHTML = student.firstName + student.lastName

var listNode = document.getElementById(student.dni)

listNode.appendChild(h1Node)

var listNode = document.getElementById(student.dni)

//h3


var h3Node = document.createElement('h3')

h3Node.innerHTML = student.dni

var listNode = document.getElementById(student.dni)

listNode.appendChild(h3Node)

var listNode = document.getElementById(student.dni)


//p

var pNode = document.createElement('p')

pNode.innerHTML = student.email

var listNode = document.getElementById(student.dni)

listNode.appendChild(pNode)

var listNode = document.getElementById(student.dni)

















console.log("jowa")


var listNode = document.getElementById('list')

var texts = ['Ed', 'Edd', 'Eddy', 'Jose', 'Maria', 'Mila']

var text

for (var i = 0; i < texts.length; i++) {
  text = texts[i]

  var textNodeLi = document.createElement('li')

  textNodeLi.innerHTML = text

  textNodeLi.id = text

  listNode.appendChild(textNodeLi)
}

$(document).ready(function () {
  console.log('Init app')

  function getData(url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  var mainListNode = $('#mainList')

  var showMoreButton = $('#showMore')

  getData('https://swapi.co/api/people/', showCharacters)

  function showCharacters(error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {
      console.log('Ok los personajes son:', data)
      var characters = data.results

      var character

      for (var i = 0; i < characters.length; i++) {
        character = characters[i]

        mainListNode.append(
          '<li class="list-group-item">' + character.name + '</li>'
        )
      }
      if (data.next) {
        showMoreButton.one('click', function () {
          getData(data.next, showCharacters)
        })
      } else {
        showMoreButton.remove()
      }
    }
  }
})

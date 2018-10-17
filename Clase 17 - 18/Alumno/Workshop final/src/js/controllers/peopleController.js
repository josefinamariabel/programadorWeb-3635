
import { getLocalList, setLocalList } from '../utils/localStorage'

import { genderTranslate, eyeTranslate } from '../utils/translates'

import { searchPeopleIndexByUrl } from '../utils/seach'

import { getData } from '../utils/ajax'

function peopleController() {
  console.log('Se cargo el controler de people')
  getData('https://swapi.co/api/people/', showPeople)

  var tableBodyMore = $('#tableBody')

  var apiResults = []

  var localPeople = getLocalList('peolpeList')

  var seeMoreButton = $('#seeMore')




  function showPeople(error, data) {
    if (error) {
      console.log('Falló algo ', error)
    } else {

      if (data.results) {
        apiResults = apiResults.concat(data.results)

        console.log(apiResults)
      }

      var people = data.results

      var person

      for (var i = 0; i < people.length; i++) {
        person = people[i]

        var url = person.url


        var localIndex = searchPeopleIndexByUrl(person.url, localPeople)

        url = url.replace("https://swapi.co/api/people/", '')

        var id = url.replace('/', '')

        var addbutton

        if (localIndex === - 1) {
          addbutton = '<button  id="button' + id + '"type="button" class="btn btn-success">Guardar </button>'
        } else {
          addbutton = ''
        }





        tableBodyMore.append(
          ' <tr id="' +
          id + '"> <th scope="row">' + id + '</th><td>' +
          person.name +
          '</td><td>' +
          genderTranslate(person.gender) +
          '</td> <td>' +
          person.height +
          ' cm</td><td>' +
          person.mass +
          ' kg</td><td>' +
          eyeTranslate('ES', person.eye_color)
          +
          '</td><td> ' + addbutton + '</td></tr> '
        )


        $('#button' + id).click(function () {
          var button = $(this)
          var buttonId = button.attr('id')
          var id = buttonId.replace('button', '')
          var newUrl = 'https://swapi.co/api/people/' + id + '/'
          var index = searchPeopleIndexByUrl(newUrl, apiResults)

          if (index !== -1) {
            var personInfo = apiResults[index]


            localPeople.push(personInfo)

            setLocalList('peopleList', localPeople)
            button.remove()

          }
        })
      }


      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, showPeople)
        })
      } else {
        seeMore.remove()
      }
    }
  }
}








export default peopleController

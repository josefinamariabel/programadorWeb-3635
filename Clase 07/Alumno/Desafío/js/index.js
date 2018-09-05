console.log("josefinita")


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




// var savedAuth = localStorage.getItem('auth')

// if (!savedAuth) {
//   var userName = prompt('Ingresá tu usuario')
//   var password = prompt('Ingresá tu contraseña')

//   var auth = {
//     userName: userName,
//     password: password
//   }

//   var stringyAuth = JSON.stringify(auth)

//   localStorage.setItem('auth', stringyAuth)
// } else {
//   var parsedAuth = JSON.parse(savedAuth)

//   var passwordCheck = prompt('Ingresá tu contraseña como está guardada')

//   if (parsedAuth.password === passwordCheck) {
//     console.log('Contraseña correcta')
//   }
// }

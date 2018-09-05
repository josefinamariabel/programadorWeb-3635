console.log("EJERCICIO")

var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']




function setLocalList(key, arrayList) {
  if (typeof key === "string" && Array.isArray(testList)) {
    var stringifyTestList = JSON.stringify(testList)

    localStorage.setItem(key, stringifyTestList)

  }
}



//setLocalList('studentsList', testList)


// s
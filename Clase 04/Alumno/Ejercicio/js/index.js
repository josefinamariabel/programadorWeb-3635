var name = "jow"
console.log(name)

// var examResults = [7, 5, 6, 4, 3, 2, 8, 7]

// var sum = 0

// for (var i = 0; i < examResults.length; i++) {
//   result = examResults[i]
//   sum = sum + result
// }

// var average = sum / examResults.length

// console.log(average)




function averageExams(examResults) {
  var sum = 0
  var result

  for (var i = 0; i < examResults.length; i++) {
    result = examResults[i]
    sum = sum + result
  }

  result = sum / examResults.length

  return result

}

var results = [7, 5, 6, 4, 3, 2, 8, 7]

var prom = averageExams(results)

console.log(prom)















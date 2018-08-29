console.log('Clase 05')

function Car(model, brand, year) {
  this.model = model

  this.brand = brand

  this.year = year

  var id = Math.random()

  this.getCarName = function () {
    return model + ' ' + brand + ' ' + year
  }
}

var volkswagenSuran = new Car('suran', 'volkswagen', 2015)
console.log(volkswagenSuran.getCarName())

var audiTt = new Car('TT', 'Adudi', 2017)
console.log(audiTt.getCarName())

var maseratiGranTurismo = new Car('Gran turismo', 'Maserati', 2018)
console.log(volkswagenSuran.getCarName())




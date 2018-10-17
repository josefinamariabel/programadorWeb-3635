function genderTranslate(gender) {
  switch (gender) {
    case 'male':
      return 'Masculino'
      break

    case 'female':
      return 'Femenino'
      break

    case 'n/a':
      return 'n/a'
      break

    default:
      return gender
      break

  }
}

var TRANSLATES = {
  ES: {
    blue: 'Azul',
    yellow: 'Amarllo',
    red: 'Rojo',
  },
  EN: {
    blue: 'Blue',
    yellow: 'Amarllo',
    red: 'Red',
  },

  PT: {
    blue: 'Azul',
    yellow: 'Amarelo',
    red: 'Vermelio',
  }
}


function eyeTranslate(lang, eyeColor) {
  return TRANSLATES[lang][eyeColor] || eyeColor

}

export { genderTranslate, eyeTranslate }
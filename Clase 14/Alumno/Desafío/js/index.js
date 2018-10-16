console.log('jowa')


$(document).ready(function () {

  $('button').on('click', function () {
    var node = $(this)

    var id = node.attr('id')

    removeElementWithAnimation(id)
  })

  function removeElementWithAnimation(id) {
    $('#' + id).parent().parent().hide(20, function () {
      $(this).remove()
    })
  }
})

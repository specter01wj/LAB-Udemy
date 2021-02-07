$( document ).ready(function() {

  var print = function(msg) {
    $('#output').html('Length is: ' + msg);
  };

  $('#btn').on('click', function(e){
    print($('#str')[0].value.length);
  });

});







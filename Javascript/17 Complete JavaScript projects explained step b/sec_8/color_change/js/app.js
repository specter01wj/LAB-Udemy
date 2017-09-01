


$( document ).ready(function() {

  var colors = ['red', 'blue', 'green', 'maroon', 'crimson', 'teal', 'sienna'];

  //i = 0;
  let i = 0;
  $('#change-color').click(function(){

    $('#wrapper').css('backgroundColor', colors[i]);
    i = (i === colors.length - 1) ? 0 : (i+1);
  });

});




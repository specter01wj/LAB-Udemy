
var d = new Date();
var weekday = [];

weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var date2 = new Date();
var weekday2 = [];

weekday2 = ['To to chillax!', 'Monday morning blues!', 'Taco Time!', 'Two more days to teh weekend.', 'The weekend is almost here...', 'Weekend is here!', 'Time to party!'];

var n = weekday[d.getDay()];
var n2 = weekday2[date2.getDay()];

$( document ).ready(function() {

  $('#weekday').html(n);
  $('#phrase').html(n2);

});




$( document ).ready(function() {

  console.clear()

  var mVar //mvar holds no value
  console.log(mVar)
  console.log(typeof(mVar));

  mVar = null //mVar holds the value null
  console.log(mVar)
  console.log(typeof(mVar));



  $('#output').html('Output is: ' + mVar);


});
$( document ).ready(function() {

  console.clear()

  var exampleString = "This is Javascript tutorial";

  // toUpperCase()
  console.log(exampleString.toUpperCase());

  // toLowerCase()
  console.log(exampleString.toLowerCase());

  // concat()
  var firstName = "Javascript";
  var lastNAme = "Playground";
  console.log(exampleString.concat(firstName));
  console.log(exampleString.concat(firstName, lastNAme));








  $('#output').html('Output is: ' + exampleString);


});
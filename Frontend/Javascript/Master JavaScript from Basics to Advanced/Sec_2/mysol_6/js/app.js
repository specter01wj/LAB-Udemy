$( document ).ready(function() {

  console.clear()

  var exampleString = "This is Javascript tutorial";

  // toUpperCase()
  console.log(exampleString.toUpperCase());

  // toLowerCase()
  console.log(exampleString.toLowerCase());

  // concat()
  var firstName = "Javascript";
  var lastName = "Playground";
  console.log(exampleString.concat(firstName));
  console.log(exampleString.concat(' ', firstName, ' ', lastName));

  // +
  console.log(firstName + ' ' + lastName + ' ' + exampleString);

  // trim()
  var extraSpaceString = "      mystring     ";
  console.log(extraSpaceString.trim());

  // charAt()
  var charAtExampleString = "This is my test string";
  console.log(charAtExampleString.charAt(5));

  // split()
  var sampleString = "This is my sample string";
  console.log(sampleString.split(' '));

  var sampleString2 = "This, is, my, sample, string";
  console.log(sampleString2.split(','));

  var sampleString3 = "This is my sample string";
  console.log(sampleString3.split());



  $('#output').html('Output is: ' + exampleString);


});
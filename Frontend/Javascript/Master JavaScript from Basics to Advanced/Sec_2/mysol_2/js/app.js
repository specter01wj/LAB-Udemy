$( document ).ready(function() {

  console.clear()
  var num1 = 10;
  var num2 = 20.3;

  // toString() number as input and returns a string
  console.log(num1.toString())
  console.log(num2.toString())

  var strNum1 = "10";
  var strNum2 = "11.5";
  var strNum3 = "ABC";

  // parseInt() string numeral as input and returns a number
  console.log(parseInt(strNum1));
  console.log(parseInt(strNum2));
  console.log(parseInt(strNum3));

  // parseFloat() string numeral as an input and returns a foating
  console.log(parseFloat(strNum2))
  console.log(parseFloat(strNum3))

  // toFixed() takes floating number and rounds it off to given position

  var strFloat = 87.987653;
  console.log(strFloat.toFixed())
  console.log(strFloat.toFixed(2))
  console.log(strFloat.toFixed(5))
  console.log(strFloat.toFixed(10))



  $('#output').html('Output is: ' + strFloat);


});
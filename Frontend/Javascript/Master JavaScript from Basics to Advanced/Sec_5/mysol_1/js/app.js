$( document ).ready(function() {

  console.clear();

  var num1 = 10;
  var num2 = 15;
  var num3 = 20;

  //Addition
  console.log(num1 + num2)
  console.log(num1 + num2 + num3)

  //Subtraction
  console.log(num2 - num1)
  console.log(num3 - num2 - num1)

  //Multiplication
  console.log(num1 * num2)

  //Division
  console.log(num2/num1)

  //Modulus
  console.log(num2 % num1)

  //Increment - Post and Pre
  console.log('Increment - Post and Pre');
  console.log(++num1)
  console.log(num1)
  console.log(num1++)
  console.log(num1++)
  console.log(num1)

  console.log(++num1)
  console.log(num1)

  //Decrement - Post and Pre
  console.log('Decrement - Post and Pre')
  console.log(num1--)
  console.log(num1)

  console.log(--num1)
  console.log(num1)



  $('#output').html('Length is: ' + num1);


});

$( document ).ready(function() {

    var num1 = Math.floor( Math.random() * 10 + 1 );
    var num2 = Math.floor( Math.random() * 10 + 1 );

    $('#number1').html(num1);
    $('#number2').html(num2);

    var ans = num1 + num2;

    var checkAns = $('input[type=text]');
    var val = checkAns.value;
    $('input[type=button][value=check]').on('click', function(){

      var val = Number($('input[type=text]').val());

      if( val === ans ) {
        $('#show_res').html('Correct!');
      } else {
        $('#show_res').html('Wrong!');
      }

      $('#input_num').val('');

      num1 = Math.floor( Math.random() * 10 + 1 );
      num2 = Math.floor( Math.random() * 10 + 1 );

      $('#number1').html(num1);
      $('#number2').html(num2);

      ans = num1 + num2;

    });

});




$( document ).ready(function() {

    var slideIndex = 1;
    showDivs(slideIndex);

    $('.btn1').on('click', function(){
      var c1 = -1;
      showDivs(slideIndex += c1 );
    });

    $('.btn2').on('click', function(){
      var c2 = 1;
      showDivs(slideIndex += c2 );
    });

    function showDivs(n) {
      var i;
      var x = $('.mySlides');

      if( n > x.length ) {
        slideIndex = 1;
      }

      if( n < 1 ) {
        slideIndex = x.length;
      }

      $.each(x, function(key, val){
        x[key].style.display = 'none';
      });

      x[slideIndex - 1].style.display = 'block';

    }

});




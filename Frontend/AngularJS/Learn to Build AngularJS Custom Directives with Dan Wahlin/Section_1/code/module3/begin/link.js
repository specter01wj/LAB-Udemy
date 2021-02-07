
  var app = angular.module('directivesModule', []);

  var liveDemo = function() {

    return {
      restrict: 'A',
        template: '<button type="button">Click Me!</button>',
      link: function(scope, elem, attrs) {

        elem.on('click', function(){
          elem.html('You clicked me!!!');
        });

        elem.on('mouseenter', function(){
          elem.css('background-color', 'yellow');
        });

        elem.on('mouseleave', function(){
          elem.css('background-color', 'green');
        });

      }
    }

  };

  app.directive('linkDemo', liveDemo);



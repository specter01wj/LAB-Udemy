(function() {

  var transclusion = function () {
      var template = '<div>Name: <input type="text" ng-model="vm.title" />&nbsp;' +
        '<button ng-click="vm.addTask()">Add Task</button>' +
        '<div class="taskContainer"><br />' +
        '<ng-transclude></ng-transclude>' +
        '</div></div>',

      controller = function () {
          var vm = this;

          vm.addTask = function () {

            if (!vm.istasks) vm.istasks = [];

              vm.istasks.push({
                title: vm.title
              });

          };
      };

      return {
          restrict: 'E',
          transclude: true,
          scope: {
            istasks: '='
          },
          controller: controller,
          controllerAs: 'vm',
          bindToController: true,
          template: template
      };
  };

  angular.module('directivesModule')
    .directive('transclusion', transclusion);

}());

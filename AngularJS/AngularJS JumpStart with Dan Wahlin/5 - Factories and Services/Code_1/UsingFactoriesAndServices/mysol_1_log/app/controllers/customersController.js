(function() {
    
    var CustomersController = function ($scope, $log, customersFactory) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        
        function init() {
            customersFactory.getCustomers()
                .then(function(response) {
                    $scope.customers = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.data.error + ' ' + data.status);
                });
        }
        
        init();
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
        
        
    };
    
    CustomersController.$inject = ['$scope', '$log', 'customersFactory'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());
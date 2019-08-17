(function() {
    
    var OrdersController = function ($scope, $routeParams, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {
           customersFactory.getCustomer(customerId)
                .then(function(response) {
                    $scope.customer = response.data;
                }, function(data, status, headers, config) {
                    console.log(data.error + ' ' + status);
                });
        }
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());
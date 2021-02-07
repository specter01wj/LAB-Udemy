(function() {
    
    var OrdersController = function ($scope, $routeParams, $log, customersFactory) {
        var customerId = $routeParams.customerId;
        $scope.customer = null;
        
        function init() {
           customersFactory.getCustomer(customerId)
                .then(function(response) {
                    $scope.customer = response.data;
                }, function(data, status, headers, config) {
                    console.log(data.data.error + ' ' + data.status);
                });
        }
        
        init();
    };
    
    OrdersController.$inject = ['$scope', '$routeParams', '$log', 'customersFactory'];

    angular.module('customersApp')
      .controller('OrdersController', OrdersController);
    
}());
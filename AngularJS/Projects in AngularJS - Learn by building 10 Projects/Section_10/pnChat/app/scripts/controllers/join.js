'use strict';

/**
 * @ngdoc function
 * @name pnChatApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pnChatApp
 */
angular.module('pnChatApp')
  .controller('JoinCtrl',['$scope', '$rootScope', '$location', 'PubNub', function($scope, $rootScope, $location, PubNub) {
    $scope.data = {
    	username: 'User_' +Math.floor(Math.random() * 1000)
    };	

    $scope.join = function(){
    	console.log('Joining...');
    	var _ref, _ref1;
    	$rootScope.data || ($rootScope.data = {});
    	$rootScope.data.username = (_ref = $scope.data) != null ? _ref.username : void 0;
        $rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city : void 0;
        $rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username;

    	console.log($rootScope);

    	PubNub.init({
    		subscribe_key: 'sub-c-5f9fef1a-0e02-11e5-9913-02ee2ddab7fe',
    		publish_key: 'pub-c-093a3c14-1880-4958-b404-e75260e53b5d',
    		uuid: $rootScope.data.uuid
    	});
    	return $location.path('/main');
    }
  }]);

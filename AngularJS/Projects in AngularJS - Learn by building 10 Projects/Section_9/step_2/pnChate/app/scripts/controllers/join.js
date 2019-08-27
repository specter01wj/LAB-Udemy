'use strict';

/**
 * @ngdoc function
 * @name pnChatApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the pnChatApp
 */
angular.module('pnChatApp')
  .controller('JoinCtrl',['$scope', '$rootScope', '$location', 'PubNub', function ($scope, $rootScope, $location, PubNub) {
    $scope.data = {
    	username: 'User_' +Math.floor(Math.random() * 1000)
    };	

    $scope.join = function(){
    	console.log('Joining...');
    	var _ref, _ref1;
    	$rootScope.data || ($rootScope.data = {});
    	$rootScope.data.username = (_ref = $scope.data) != null ? _ref.username : void 0;
    	$rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city : void 0;
    	$rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__'+ $scope.data.username;
    	$rootScope.secretKey = 'sec-c-ZTQ1NmIzYzAtYjVjMi00M2FhLWIyYmUtOGNhNjRjMTA2NjUz';
    	$rootScope.authKey = '123456';

    	console.log($rootScope);

    	PubNub.init({
    		subcribe_key: 'sub-c-c212b148-0df6-11e5-acb2-02ee2ddab7fe',
    		publish_key: 'pub-c-9dd738d3-3bdf-473a-971d-c60529560ee7',
    		secret_key: $rootScope.secretKey,
    		auth_key: $rootScope.authKey,
    		uuid: $rootScope.data.uuid
    	});

    	return $location.path('/main');
    }
  }]);

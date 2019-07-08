(function (angular) {

	var app = angular.module('minmax', [])
           .controller('MinMaxCtrl', MinMaxCtrl);

    MinMaxCtrl.$inject = ['$http'];

	// app.run(function (defaultErrorMessageResolver) {
	// 		defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
	// 			errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
	// 			errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
	// 			errorMessages['badUsername'] = 'Username can only contain numbers and letters and _';
	// 		});
	// 	}
	// );


	function MinMaxCtrl($http) {
		var vm = this;
		vm.formModel = {};
		vm.submitting = false;
		vm.submitted = false;
		vm.has_error = false;

		vm.onSubmit = function () {
			vm.submitting = true;
			console.log("Hey i'm submitted!");
			console.log(vm.formModel);
			
			$http.post('https://minmax-server.herokuapp.com/register/', vm.formModel).
				success(function (data) {
					console.log(":)");
					vm.submitting = false;
					vm.submitted = true;
					vm.has_error = false;
				}).error(function(data) {
					console.log(":(");
					vm.submitting = false;
					vm.submitted = false;
					vm.has_error = true;
				});

		};








		
    }
})(window.angular);


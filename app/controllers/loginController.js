angular
	.module('app')
	.controller('loginController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope){
		$scope.submit = function() {
			var uname = $scope.username;
			var password = $scope.password;
			if($scope.username == 'admin' && $scope.password == 'admin') {
				$state.go('dashboard');
			}
		}
	}])
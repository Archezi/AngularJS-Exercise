angular.module('app')
	.factory('factory1',['$http', function($http){

	}]);

angular.module('app')
	.controller('detailController', ['$scope',  function($scope ){
		console.log("is working")
}])
angular.module('app')
	.controller('countryCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
		var URL = "components/data/countries.json";
		$http.get(URL)
			.then(function (response) {
				$scope.countries = response.data;
			});
	}]);
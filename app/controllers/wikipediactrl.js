angular.module('app')
	.controller('wikiCtrl', ['$scope','$http', function($scope, $http ){
		var vm = $scope;
		vm.searchTermArr = [];
		vm.searchWiki = function(wikiFactory){
			console.log(response);
		}
		vm.searchWiki = function(){
			$http({
				url: "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + vm.searchTerm + '&format=json&callback=JSON_CALLBACK',
				method: 'jsonp'
			}).success(function(response){
				console.log(response);
				vm.searchTermArr.push(response[1]);
				vm.searchTermArr.push(response[2]);
				vm.searchTermArr.push(response[3]);
			});
		};
		
	}]);

	// angular.module('app').factory('wikiFactory', ['$http', function($http) {

	// 	searchWiki = function(){
	// 			$http({
	// 				url: "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + '&format=json&callback=JSON_CALLBACK',
	// 				method: 'jsonp'
	// 			}).success(function(response){
	// 				console.log(response);
	// 				searchTermArr.push(response[1]);
	// 				searchTermArr.push(response[2]);
	// 				searchTermArr.push(response[3]);
	// 			});
	// 		};

	// }]) 




	
angular.module('app')
.controller('mainController', function($scope){
	$scope.home = "this is mainController scope"
});

// Controller for  ==== --- CONTACT PAGE --- ====
// angular.module('app')
// .controller('contactCtrl', ['$scope', function($scope){
	
	
// 	$scope.name = '';
// 	$scope.email = '';
// 	$scope.message = '';
// 	$scope.submit = function(contact) {
// 		if ($scope.name || $scope.email || $scope.message) {
// 			$scope.listOfContacts.push({ name: $scope.name, email: $scope.email, message: $scope.message});
// 			console.log($scope.listOfContact);
// 			$scope.name = '';
// 			$scope.email = '';
// 			$scope.message = '';
// 			console.log($scope.listOfContacts);


// 		}
// 	};
// 	$scope.listOfContacts = [
// 	{
// 		name: "Lukasz",
// 		email: "luka@kaczmarek@gmail.com"
// 	}
// 	];
	
// }]);

// Controller for  ==== --- HOME PAGE --- ====
angular.module('app')
.controller('homeCtrl', ['$scope', function($scope){
	$scope.home = "this is mainController scope"
}]);  


// Controller for  ==== --- ABOUT PAGE --- ====
angular.module('app')
.controller('aboutCtrl', ['$scope', function($scope){
	$scope.home = "this is mainController scope"
}]);

// Controller for ==== --- MOVIE APP --- ====

// angular.module('app')
// .controller('moviesCtrl', ['$scope', function($scope) {
	
// 	var movies = [
// 	{ title:"The Big Lebowski" ,IMDBRating: 8.2, year:1998, plot: '"The Dude" Lebowski, mistaken for a millionaire Lebowski'},
// 	{ title: "Interstellar", IMDBRating: 8.6, year: 2014, plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."},
// 	{ title: "The Dark Knight", IMDBRating: 8.3, year: 208, plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham"}
// 	];
// 	$scope.addMovie = function () {
		
// 		var newMovie = 
// 		{ 
// 			title: $scope.movie.title ,
// 			IMDBRating: $scope.movie.IMDBRating , 
// 			year: $scope.movie.year , 
// 			plot: $scope.movie.plot 
// 		};
// 		$scope.movies.push(newMovie);
// 		$scope.movie = {};
// 	}
// 	$scope.movies = movies;
// 	  //remove movie function 
// 	  $scope.removeMovie = function( movie ) {
	  	
// 	  	var index = $scope.movies.indexOf(movie);
// 	    // splice is a java script array function 
// 	    $scope.movies.splice(index, 1);
// 	}

// 	$scope.selectMovie = function ( movie ) {
// 		$scope.movie = movie;
// 	}

// 	$scope.updateMovie = function ()
// 	{
// 		alert($scope.movie.title);
// 	}
// }]); 

// Controller for ==== --- Counties APP --- ==== 

// angular.module('app')
// 	.controller('pixabayCtrl', ['$scope', '$http', function($scope, $http) {
// 		// funkcja importujaca API z pixabay i krora umozliwia wyszukiwanie zdjec na 
// 		$scope.searchPicture = function () {
// 			// searchPicture uzywam do zbindowania ng-click do rozpoczecia funkcji i lacze to z przyciskiem ktory rozpoczyna funkcjie 
// 			var picture = $scope.searchPictureByTag;
// 			// searchPictureByTag uzyam do zbindowania input fildu w polu wyszukiwania 
// 			var API_KEY = '4438609-0ca4e01fa6ed311f79c113532' ;
// 			var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(picture);

// 			$http.get(URL)
// 				.then(function(response) {
// 				$scope.myPictures = response.data;



// 			});
// 	};
// }]);

// Controller for ==== --- Counties APP --- ==== 

// angular.module('app')
// 	.controller('countryCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
// 		var URL = "components/data/countries.json";
// 		$http.get(URL)
// 			.then(function (response) {
// 				$scope.countries = response.data;
// 			});
// 	}]);


// Controller for ==== --- Google Places API --- ==== 

// angular.module('app')
// 	.controller('googleMapCtrl', ['$scope', function($scope, GoogleData){

// 		var map;
// 		// $scope.gMap = map;
// 		// var infoWindow;
// 		// var markerList = $scope.markerList ;
// 		// $scope.places = [];
// 		// var photos
// 		// $scope.gPhoto = photos;
// 		// var request;
// 		// var service;
// 		// var markers = [];
// 		// $scope.map = map
// 		$scope.placeNameArr = [];
// 		console.log($scope.placeNameArr);
		

// 		function initialise (position) {
// 			$scope.$apply(function(){

// 				var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
// 				map = new google.maps.Map(document.getElementById('map'),{
// 					center: center,
// 					zoom:12
// 				});



				
// 				var defaultBounds = new google.maps.LatLngBounds(
// 					new google.maps.LatLng(),
// 					new google.maps.LatLng());
// 					// -33.8902, 151.1759
// 					// -33.8474, 151.2631
// 				var option = {
// 					bounds: defaultBounds,
// 					types: ['(cities)']
// 				};

// 				var input = document.getElementById('pac-input');
// 				map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// 				var autocomplete = new google.maps.places.Autocomplete(input, option)	;

// 				var request = {
// 					location: center,
// 					radius: 8047,
// 					types: [ 'museum' ]
// 					// 'restaurant'
// 				};	




// 				infowindow = new google.maps.InfoWindow();

				
// 				var service = new google.maps.places.PlacesService(map);

// 				service.nearbySearch(request, callback);

// 			})


// 		}




// 		function callback(results, stattus) {
// 			if(stattus == google.maps.places.PlacesServiceStatus.OK) {
// 				for (var i=0; i < results.length; i++) {
// 					var place = results[i]
// 					createMarker(results[i]);
// 					// console.log(results);

// 				}
// 				 $scope.$apply(function () {
//                     $scope.places = results;
//                 });

// 			}
// 		}
// 		// $scope.markerCreation =
// 		 function createMarker(place) {
// 			var placeLoc = place.geometry.location;
// 			 photos = place.photos;
// 			 // console.log(photos);
// 			if (!photos) {
// 				return;

// 				// $scope.googlePhoto = place.photo;
// 				// console.log($scope.googlePhoto);
// 			}
			
// 			var marker = new google.maps.Marker({
// 				map: map,
// 				position: place.geometry.location
// 				// titile: place.name,
// 				// icon: photos[0].getUrl({'maxWidth': 35, 'maxHeight': 35})
			
// 			});
// 			// $scope.photoList = photos;
// 			// $scope.markerList = place.photos[0];
// 			//  console.log($scope.markerList);
			

// 			google.maps.event.addListener(marker, 'click', function(){

// 				infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//                 'Place ID: ' + place.place_id + '<br>' +
//                  '<img src='+ place.photos[0].getUrl({'maxWidth': 175, 'maxHeight': 175}) +'>' + '<br>' + 'Rating:' + place.rating + '<img src='+ place.photos +'>' + '</div>');
// 				infowindow.open(map,this);
// 				// console.log(infowindow);
				
// 			})
// 			console.log(place);
// 			$scope.placeNameArr.push(place.name);
// 		}

// 		navigator.geolocation.getCurrentPosition(initialise);
// 		// google.maps.event.addDomListener(window, 'load', initialize);

// 	}])

// angular.module('app')
// 	.controller('wikiCtrl', ['$scope','$http', function($scope, $http, GoogleData){
// 		var vm = $scope;
// 		vm.searchTermArr = [];

// 		vm.searchWiki = function(){
// 			$http({
// 				url: "http://en.wikipedia.org/w/api.php?action=opensearch&search=" + vm.searchTerm + '&format=json&callback=JSON_CALLBACK',
// 				method: 'jsonp'
// 			}).success(function(response){
// 				console.log(response);
// 				vm.searchTermArr.push(response[1]);
// 				vm.searchTermArr.push(response[2]);
// 				vm.searchTermArr.push(response[3]);
// 			});
// 		};
		
// 	}]); 




	
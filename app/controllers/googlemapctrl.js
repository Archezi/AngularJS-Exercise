angular.module('app')
	.controller('googleMapCtrl', ['$scope',  function($scope ){

		var map;
		
		$scope.placeNameArr = [];
		console.log($scope.placeNameArr);
		

		function initialise (position) {
			$scope.$apply(function(){

				var center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				map = new google.maps.Map(document.getElementById('map'),{
					center: center,
					zoom:12
				});
				
				var defaultBounds = new google.maps.LatLngBounds(
					new google.maps.LatLng(),
					new google.maps.LatLng());
					
				var option = {
					bounds: defaultBounds,
					types: ['(cities)']
				};

				var input = document.getElementById('pac-input');
				map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

				var autocomplete = new google.maps.places.Autocomplete(input, option)	;

				var request = {
					location: center,
					radius: 8047,
					types: [ 'movie_theater' ]
					// 'restaurant'
				};	

				infowindow = new google.maps.InfoWindow();

				var service = new google.maps.places.PlacesService(map);

				service.nearbySearch(request, callback);

			})
		}

		function callback(results, stattus) {
			if(stattus == google.maps.places.PlacesServiceStatus.OK) {
				for (var i=0; i < results.length; i++) {
					var place = results[i]
					createMarker(results[i]);
					// console.log(results);
				}
				 $scope.$apply(function () {
                    $scope.places = results;
                });

			}
		}
		
		function createMarker(place) {
			var placeLoc = place.geometry.location;
			photos = place.photos;
			if (!photos) {
				return;
			
		}

		var marker = new google.maps.Marker({
			map: map,
			position: place.geometry.location
		});

		google.maps.event.addListener(marker, 'click', function(){

			infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
		    'Place ID: ' + place.place_id + '<br>' +
		     '<img src='+ place.photos[0].getUrl({'maxWidth': 175, 'maxHeight': 175}) +'>' + '<br>' + 'Rating:' + place.rating + '<img src='+ place.photos +'>' + '</div>');
			infowindow.open(map,this);
			
		})
		console.log(place);
		$scope.placeNameArr.push(place.name);
		}
		navigator.geolocation.getCurrentPosition(initialise);
		// google.maps.event.addDomListener(window, 'load', initialize);

	}])

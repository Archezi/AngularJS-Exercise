angular.module('app')
.controller('moviesCtrl', ['$scope', function($scope) {
	
	var movies = [
	{ title:"The Big Lebowski" ,IMDBRating: 8.2, year:1998, plot: '"The Dude" Lebowski, mistaken for a millionaire Lebowski'},
	{ title: "Interstellar", IMDBRating: 8.6, year: 2014, plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."},
	{ title: "The Dark Knight", IMDBRating: 8.3, year: 208, plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham"}
	];
	$scope.addMovie = function () {
		
		var newMovie = 
		{ 
			title: $scope.movie.title ,
			IMDBRating: $scope.movie.IMDBRating , 
			year: $scope.movie.year , 
			plot: $scope.movie.plot 
		};
		$scope.movies.push(newMovie);
		$scope.movie = {};
	}
	$scope.movies = movies;
	  //remove movie function 
	  $scope.removeMovie = function( movie ) {
	  	
	  	var index = $scope.movies.indexOf(movie);
	    // splice is a java script array function 
	    $scope.movies.splice(index, 1);
	}

	$scope.selectMovie = function ( movie ) {
		$scope.movie = movie;
	}

	$scope.updateMovie = function ()
	{
		alert($scope.movie.title);
	}
}]); 
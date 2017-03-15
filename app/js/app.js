angular.module('app',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('homeState', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller:'homeCtrl'
    })
    .state('aboutState', {
      url:'/about',
      templateUrl:'views/about.html',
      controller: 'aboutCtrl'
    })  
    .state('contactState', {
      url: '/contact',
      templateUrl:'views/contact.html',
      controller: 'contactCtrl'
    
       
    })
    .state('movieState', {
      url: '/movies',
      templateUrl: 'views/movies.html',
      controller: "moviesCtrl"  
    })
    .state('countriesState', {
      url: '/countires',
      templateUrl: 'views/countries.html',
      controller: "countryCtrl"  
    })
    .state('pixabayState', {
      url: '/pixabay',
      templateUrl: 'views/pixabay.html',
      controller: "pixabayCtrl"  
    })
    .state('googlePlaces', {
      url: '/googleplaces',
      templateUrl: 'views/googleplaces.html',
      controller: "googleMapCtrl"
    })
    .state('googlePlace', {
      url: '/googleplaces/:aID',
      templateUrl: 'views/googlePlaceItem.html',
      controller: 'detailController'
      
    })
    .state('wikipedia', {
      url: '/wikipedia',
      templateUrl: 'views/wikipedia.html',
      controller: "wikiCtrl"
    })
    .state('factory', {
      url: '/factory',
      templateUrl: 'views/factory.html',
      controller: "googleMapController"
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/loginUser.html',
      controller: "loginController"
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      
    })


});




angular.module('app').directive('backButton', function(){
	return {
		restrict: 'A',
        link: function( scope, element, attrs ) {
            element.on( 'click', function () {
                history.back();
                scope.$apply();
            } );
        }
	};
})
// angular.module('app').directive('linkButton', function(){
// 	return {
// 		restrict: 'A',
// 		templateUrl: 'directives/icons/linkbutton.html'
// 	}
// })
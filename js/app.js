'use strict';

angular.module('myApp', [
'ngRoute',
	'myApp.version',
	'ngAnimate',
	'myServices',
	'myControllers',
	'myDirectives'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/:name', {
			templateUrl: 'templates/player-view.html',
			controller: 'playerCtrl'
		}).
		otherwise({
			redirectTo: '/barbosa'}
	);
}]);

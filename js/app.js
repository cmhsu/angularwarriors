'use strict';

// Declare app level module which depends on views, and components
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

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
	'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/:name', {
		  templateUrl: 'templates/player-view.html',
		  controller: 'playerCtrl'
	  }).
	  otherwise({
		  redirectTo: '/barbosa'}
    );
}])

.controller('playerCtrl', ['$scope', '$http', '$routeParams', 'fullName',
	function($scope, $http, $routeParams, fullName) {
		var name = $routeParams.name;
		$http.get('player-info/' + name + '.json').success(function(data) {
			$scope.playerInfo = data;
		});
		$scope.fullName = fullName(name);
		$scope.isActive = function(person) {
			return person == $routeParams.name;
		};
		$scope.lastName = name;
	}
])

.directive('myNavigation', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/navigation.html'
	}
})

.factory('fullName', function() {
	var fullNames = {
		barbosa: 'Leandro Barbosa',
		barnes: 'Harrison Barnes',
		curry: 'Stephen Curry',
		thompson: 'Klay Thompson',
		bogut: 'Andrew Bogut',
		ezeli: 'Festus Ezeli',
		green: 'Draymond Green',
		holiday: 'Justin Holiday',
		iguodala: 'Andre Iguodala',
		kuzmic: 'Ognjen Kuzmic',
		lee: 'David Lee',
		livingston: 'Shaun Livingston',
		mcadoo: 'James Michael McAdoo',
		rush: 'Brandon Rush',
		speights: 'Marreese Speights'
	};
	return function(lastName) {
		return fullNames[lastName];
	}
})
;

'use strict';

var myControllers = angular.module('myControllers', []);

myControllers.controller('playerCtrl', ['$scope', '$http', '$routeParams', 'fullName', '$rootScope',
	function($scope, $http, $routeParams, fullName, $rootScope) {
		var name = $routeParams.name;
		$http.get('player-info/' + name + '.json').success(function(data) {
			$scope.playerInfo = data;
		});
		$scope.fullName = fullName(name);
		$scope.isActive = function(person) {
			return person == $routeParams.name;
		};
		$scope.lastName = name;
		$scope.dark = false;
		$rootScope.moved = true;
	}
]);
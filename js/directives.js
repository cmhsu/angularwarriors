'use strict';

var myDirectives = angular.module('myDirectives', []);

myDirectives.directive('myNavigation', function() {
	return {
		restrict: 'E',
		controller: 'playerCtrl',
		templateUrl: 'templates/navigation.html'
	}
});
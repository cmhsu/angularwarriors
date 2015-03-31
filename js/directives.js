'use strict';

var myDirectives = angular.module('myDirectives', []);

myDirectives.directive('myNavigation', function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/navigation.html'
	}
});
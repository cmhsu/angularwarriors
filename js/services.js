'use strict';

var myServices = angular.module('myServices', []);

myServices.factory('fullName', function() {
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
	};
});
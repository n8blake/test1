var app = angular.module('myApp', []);

app.controller('myController', function($scope, $http) {
	console.log('Hello from ngApp.');
    
	$scope.userAuthenticated = window.userAuthenticated;

	$scope.isLoaded = true;

});
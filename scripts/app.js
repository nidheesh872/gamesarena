'use strict';

// Declare app level module which depends on views, and components
var preferencesApp = angular.module('preferencesApp', ['ngRoute', 'autocomplete',  'preferencesControllers', 'preferencesServices']);

var preferencesControllers = angular.module('preferencesControllers', []);
var preferencesServices = angular.module('preferencesServices', []);

preferencesApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
		function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'Ctrl'
        }).otherwise({
            redirectTo: '/home'
        });
		}]);

preferencesApp.directive('buttonDropdown', ['$timeout', function ($timeout) {
    function link(scope, element, attrs) {
        $(element).dropdown({ belowOrigin: true});
    }
    return {
        link: link
    };
}]);


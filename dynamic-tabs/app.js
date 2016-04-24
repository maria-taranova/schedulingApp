'use strict';

var MyApp = angular.module('MyApp', [
    'ngRoute',
    'bookingControllers',
    'material.svgAssetsCache',
   
    'ngMaterial',
    'ngMessages'
 
]);

MyApp.config(['$routeProvider', "$locationProvider",
    function($routeProvider, $locationProvider) {
        
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl: 'partials/booking.html',
            controller: 'BookingCtrl'
        }).when('/:room', {
            templateUrl: 'partials/booking.html',
            controller: 'BookingCtrl'
        }).when('/:room/:day', {
            templateUrl: 'partials/booking.html',
            controller: 'BookingCtrl'
        }).
        otherwise({
            redirectTo: ''
        });
        
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
}]);

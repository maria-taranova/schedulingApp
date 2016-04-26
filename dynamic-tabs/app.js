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

MyApp.factory("ajaxcall", function($http){
    return {
        setData:function(obj){
            this.method = (obj.method) ? obj.method : "POST";
            this.url = obj.url;
            this.data = obj.data;
            this.reponseType = (obj.responseType) ? obj.reponseType : "json";
        },
        method:null,
        url:null,
        data:null,
        responseType:null,
        run: function(success, error){
            $http({
                method:this.method,
                url:this.url,
                data:this.data,
                responseType:this.responseType,
                transformRequest: function(tobj) {
                   //var str = angular.toJson(tobj);
                  var str = JSON.stringify(tobj);
                    //console.log(str);
                    return str;
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
                if(typeof success === "function"){
                    success(response.data);
                }
            }, function errorCallback(response) {
                if(typeof error === "function"){
                    error(response);
                }
            });
        }
    }
});

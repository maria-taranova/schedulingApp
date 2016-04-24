  'use strict';
  
var booking = angular.module('bookingControllers', []);

booking.controller("BookingCtrl", ["$scope",  "$rootScope", "$timeout", "$q", "$log",  '$http', '$location', '$mdSidenav', '$routeParams',  function($scope, $rootScope, $timeout, $q, $log,  $http, $location, $mdSidenav, $routeParams){

     var dummy = {
                hawai: [
                        {title: "monday",
                         content: "some cnt for monday",
                         name: "hawai",
                        slots: [
                                {time: "9:00am", booked: true, date: "2016-04-13"}, 
                                {time: "10:00am", booked: true, date: "2016-04-13"},
                                {time: "11:00am", booked: false, date: "2016-04-13"},
                                {time: "12:00am", booked: false, date: "2016-04-13"},
                                {time: "1:00pm", booked: true, date: "2016-04-13"},
                                {time: "2:00pm", booked: false, date: "2016-04-13"},
                                {time: "3:00pm", booked: false, date: "2016-04-13"},
                                {time: "4:00pm", booked: false, date: "2016-04-13"},
                                {time: "5:00pm", booked: false, date: "2016-04-13"}
                        
                        ]},
                        {
                        title: "tuesday", content: "some cnt for tuesday", name: "hawai",
                        slots: [
                                {time: "9:00am", booked: true, date: "2016-04-14"}, 
                                {time: "10:00am", booked: true, date: "2016-04-14"},
                                {time: "11:00am", booked: false, date: "2016-04-14"},
                                {time: "12:00am", booked: false, date: "2016-04-14"},
                                {time: "1:00pm", booked: true, date: "2016-04-14"},
                                {time: "2:00pm", booked: false, date: "2016-04-14"},
                                {time: "3:00pm", booked: false, date: "2016-04-14"},
                                {time: "4:00pm", booked: false, date: "2016-04-14"},
                                {time: "5:00pm", booked: false, date: "2016-04-14"}
                        
                        ]}
                ], 
               bermuda: [{name: 'bermuda'},
                        {title: "wensday",content: "some cnt for monday", name: "bermuda",
                        slots: [
                                {time: "9:00am", booked: true, date: "2016-04-13"}, 
                                {time: "10:00am", booked: true, date: "2016-04-13"},
                                {time: "11:00am", booked: false, date: "2016-04-13"},
                                {time: "12:00am", booked: false, date: "2016-04-13"},
                                {time: "1:00pm", booked: true, date: "2016-04-13"},
                                {time: "2:00pm", booked: false, date: "2016-04-13"},
                                {time: "3:00pm", booked: false, date: "2016-04-13"},
                                {time: "4:00pm", booked: false, date: "2016-04-13"},
                                {time: "5:00pm", booked: false, date: "2016-04-13"}
                        
                        ]},
                        {
                        title: "thursday", content: "some cnt for tuesday", name: "bermuda",
                        slots: [
                                {time: "9:00am", booked: true, date: "2016-04-14"}, 
                                {time: "10:00am", booked: true, date: "2016-04-14"},
                                {time: "11:00am", booked: false, date: "2016-04-14"},
                                {time: "12:00am", booked: false, date: "2016-04-14"},
                                {time: "1:00pm", booked: true, date: "2016-04-14"},
                                {time: "2:00pm", booked: false, date: "2016-04-14"},
                                {time: "3:00pm", booked: false, date: "2016-04-14"},
                                {time: "4:00pm", booked: false, date: "2016-04-14"},
                                {time: "5:00pm", booked: false, date: "2016-04-14"}
                        
                        ]}
                ], 
                };
    console.log(dummy)
     var tabs = dummy["hawai"],  
        selected = null,
        previous = null;
    $scope.tabs = tabs;
     
    $scope.selectedIndex = 2;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
     selected = tabs[current];
    console.log(selected.title);
        var y = $location.search();
        console.log("newValue")//continue here
      switch(selected.title) {
          //  case "monday": $location.path('/newValue').search({key: value}); break;
            
          }

    
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )   {
          $log.debug('Hello ' + selected.title + '!');
          
          }             
    });
      
 
 

    $scope.rooms = [{name: "hawai", 
                        tabs: [
                        { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."}]}, {name: "bermuda"} ];
      
      
    $scope.selectUser   = selectUser;
    $scope.toggleList   = toggleUsersList;
  
    // Load all registered users


    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
    
       $mdSidenav('left').toggle();
    }

   $scope.reservations = [];
     $scope.chosen = $scope.rooms[0];
      function selectUser (room) {
           $scope.tabs = dummy[room.name];
       
           $scope.chosen = angular.isNumber(room) ? $scope.rooms[room] : room;
               //console.log(angular.isNumber(room));
          console.log(room);
        // changeUrl(room.name);
      }

    
    var changeUrl = function(v){
        var str =  v;
        console.log($location);
        console.log($routeParams);
        $location.path(str);
    }


      $scope.toggle = function (item, list, e) {
        var idx = list.indexOf(item);
        var room = e.target.attributes.data.value;
        item.room = room;
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
        if(item.booked){
         return false;
        }
            list.push(item);
            
        }
          $scope.reservation = transformArr($scope.reservations);
            console.log($scope.reservation);

      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

      
      function transformArr(orig) {
                var newArr = [],
                dates = {},
                newItem, i, j, cur;
            for (i = 0, j = orig.length; i < j; i++) {
                cur = orig[i];
                if (!(cur.date in dates)) {
                    dates[cur.date] = {date: cur.date, rooms: []};
                    newArr.push(dates[cur.date]);
                }
                dates[cur.date].rooms.push(cur);
            }
            return newArr;
        }
  }]);




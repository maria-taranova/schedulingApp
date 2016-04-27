  'use strict';
  
var booking = angular.module('bookingControllers', []);

booking.controller("BookingCtrl", ["$scope",  "$rootScope", "$timeout", "$q", "$log",  '$http', '$location', '$mdSidenav', '$routeParams', 'ajaxcall', function($scope, $rootScope, $timeout, $q, $log,  $http, $location, $mdSidenav, $routeParams, ajaxcall){

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
                                {time: "9:00am", room: "hawai", booked: true, date: "2016-04-14"}, 
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
                                {time: "9:00am", room: "bermuda", booked: true, date: "2016-04-14"}, 
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
   $scope.rooms = ['hawai', 'bermuda'];

    var userid = null;
    //Henry's ajax
   var data = {};
   data.type ="getrooms";

console.log(data);
    ajaxcall.setData({
        url:"controllers/listen.php",
        data: data
    });
    ajaxcall.run(function(resp){
        console.log(resp);
        $scope.rooms = resp.rooms;
        /*if(resp.status == 1){
            $scope.rooms= resp.rooms;
            rooms = resp.rooms;
            //console.log($scope.rooms);
            //window.lensHive = ["Lens1", "Lens2", "Z3", "L4", "M5"]; 
            //console.log($scope.rooms);
            tagsInit();
            
            //console.log($scope.tags);
        }*/
    }, function(resp){

    });
    //
    

    
    //console.log(dummy)
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

    /*  $scope.timing = {
        1: {time: 8am, booked: false},
        2: {time: 9am, booked: false},
        3: {time: 10am, booked: false},
        4: {time: 11am, booked: false},
        5: {time: 12am, booked: false},
        6: {time: 1pm, booked: false},
        7: {time: 2pm, booked: false},
        8: {time: 3pm, booked: false},
        9: {time: 4pm, booked: false},
        10: {time: 5pm, booked: false}
    };*/
    
   $scope.reservations = [];
     $scope.chosen = $scope.rooms[0];
      function selectUser (roomid) {
         //  $scope.tabs = dummy[room];
       
          // $scope.chosen = angular.isNumber(room) ? $scope.rooms[room] : room;
               //console.log(angular.isNumber(room));
          console.log(roomid);
          
          
data.type = "getRoomSchedule";
data.roomid = roomid;

console.log(data);
    ajaxcall.setData({
        url:"controllers/listen.php",
        data: data
    });
    ajaxcall.run(function(resp){
       
        $scope.tabs = resp.days;
        //setting booked attribute 
        /*for(var y in  $scope.tabs){
            var z = $scope.tabs[y];
            for(var i = 0; i<z.length; i++){
               z[i]['booked'] = true;
                console.log(z[i]);
            }
        }*/
        
     for(var y in $scope.timing){
         console.log(y);
     }
          console.log($scope.tabs);
        /*if(resp.status == 1){
            $scope.rooms= resp.rooms;
            rooms = resp.rooms;
            //console.log($scope.rooms);
            //window.lensHive = ["Lens1", "Lens2", "Z3", "L4", "M5"]; 
            //console.log($scope.rooms);
            tagsInit();
            
            //console.log($scope.tags);
        }*/
    }, function(resp){

    });
          
          
          
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
          var f = transformArr($scope.reservations);
          $scope.reservation = f;

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




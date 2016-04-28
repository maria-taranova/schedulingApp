  'use strict';

  var booking = angular.module('bookingControllers', []);

  booking.controller("BookingCtrl", ["$scope", "$rootScope", "$timeout", "$q", "$log", '$http', '$location', '$mdSidenav', '$routeParams', 'ajaxcall', function($scope, $rootScope, $timeout, $q, $log, $http, $location, $mdSidenav, $routeParams, ajaxcall) {

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
   
          /*Dates*/
      $scope.myDate = new Date();
      $scope.dateChange = function(){
          console.log($scope.myDate);
      }
       /*Dates finished*/
      
    var userid = null;
    //Henry's ajax
    var data = {};
    data.type = "getrooms";
    data.rdate = $scope.myDate;

    console.log(data);
    ajaxcall.setData({
      url: "controllers/listen.php",
      data: data
    });
    ajaxcall.run(function(resp) {
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
    }, function(resp) {

    });
    //////////
  /*     var tabs = {};
      $timeout(function() {
           
      data.type = "getRoomSchedule";
      data.roomid = 1;
      //$scope.rooms[0].id

      ajaxcall.setData({
        url: "controllers/listen.php",
        data: data
      });
      ajaxcall.run(function(resp) {
          console.log(resp.days['2016-05-29']);
          tabs = resp.days['2016-05-29'];
            

              });
            }, 1)*/

      ///////////
      

      

    $scope.selectUser = selectUser;
    $scope.toggleList = toggleUsersList;

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

    /* var timing = {
         1: {time: "8am", booked: false},
         2: {time: "9am", booked: false},
         3: {time: "10am", booked: false},
         4: {time: "11am", booked: false},
         5: {time: "12am", booked: false},
         6: {time: "1pm", booked: false},
         7: {time: "2pm", booked: false},
         8: {time: "3pm", booked: false},
         9: {time: "4pm", booked: false},
         10: {time: "5pm", booked: false}
     };*/
    function Timing(z){
        var slots = {
        1: {time: "8am", booked: false},
        2: {time: "9am", booked: false},
        3: {time: "10am", booked: false},
        4: {time: "11am", booked: false},
        5: {time: "12am", booked: false},
        6: {time: "1pm", booked: false},
        7: {time: "2pm", booked: false},
        8: {time: "3pm", booked: false},
        9: {time: "4pm", booked: false},
        10: {time: "5pm", booked: false}
        }
        var name = "";
        var date ="";
        for( var i in z){
            console.log(i);
            if(slots[i]){
                slots[i].booked = true;
               // slots[i].id = z[i][id];
                name = z[i].name;
                date = z[i].date;
                (console.log("the date is "+z[i].date))
            }
            
        }
        console.log(z)
         for( var ii in slots){
            slots[ii].name = name;
            slots[ii].date = date;
        }
         console.log(slots)
        return slots;
    }
    

    $scope.reservations = [];
    // $scope.chosen = $scope.rooms[0];
    function selectUser(roomid) {
      //  $scope.tabs = dummy[room];

      // $scope.chosen = angular.isNumber(room) ? $scope.rooms[room] : room;
      //console.log(angular.isNumber(room));
      console.log(roomid);

      data.type = "getRoomSchedule";
      data.roomid = roomid;

      function Tab(date, slots) {
        this.date = date;
        this.slots = slots;

      }
        
        
      console.log(data);
      ajaxcall.setData({
        url: "controllers/listen.php",
        data: data
      });
      ajaxcall.run(function(resp) {

        //$scope.tabs = resp.days;
        //setting booked attribute 
        /* for(var y in  $scope.tabs){
              var z = $scope.tabs[y];
              for(var i = 0; i<z.length; i++){
                 z[i]['booked'] = true;
                  console.log(z[i]);
              }
             /*  for(var i = 1; i<10; i++){
                 if(!z[i]){
                      console.log("slots not booked"+[i]); 
                     $scope.tabs[y] =  z[i]['booked'];
                     z[i]['booked'] = false;
                 }
                     
                
              }*/
        /*
                 for(var t in $scope.timing){
               if($scope.tabs[y][t]){
                   $scope.timing[t] = $scope.tabs[y][t];
               }
           }
                           console.log( $scope.timing);

        }
        
         for(var y in resp.days){
        
         for(var t in $scope.timing){
                if(resp.days[y][t]){
                   $scope.timing[t] = resp.days[y][t];
               }
           }
                     console.log( $scope.timing);
     var date = new Tab(y, $scope.timing );
     tabb.push(date);
     
        }
        */
        var tabb = [];
        for (var y in resp.days) {

          console.log(resp.days[y]);
          var g = new Timing(resp.days[y]);
          var singleTab = new Tab(y, g);
            
        console.log(singleTab);
          tabb.push(singleTab);

        }
/*DATES
        for(var i of tabb){
            console.log();
            var dates = [];
            var date = new Date(tabb[1].date);
           

            for(var i = 1; i < 6; i++){
                 var newDate = new Date(date.setDate(date.getDate() + i));
                 dates.push(newDate);
            }
            
            console.log(dates);
        }
   */
    //console.logging tab indexes      
          
          var selected = null,
        previous = null;
        $scope.tabs = tabb;
    $scope.selectedIndex = 0;
    $scope.$watch('selectedIndex', function(current, old){
              console.log($scope.tabs);

        console.log(current);
        previous = selected;
      selected = tabb[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.date + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.date + '!');
    });
              //console.logging tab indexes  end    

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
      }, function(resp) {

      });

      // changeUrl(room.name);
    }

    var changeUrl = function(v) {
      var str = v;
      console.log($location);
      console.log($routeParams);
      $location.path(str);
    }

    $scope.toggle = function(item, list, e) {
      console.log(item);
      var idx = list.indexOf(item);

      //var room = e.target.attributes.data.value;
      //item.room = room;
      if (idx > -1) {
        list.splice(idx, 1);
      } else {
        if (item.booked) {
          return false;
        }
        list.push(item);

      }
      // console.log($scope.reservations);
      var f = transformArr(list);
      $scope.reservation = f;

    };

    $scope.exists = function(item, list) {
      return list.indexOf(item) > -1;
    };

    function transformArr(orig) {

      console.log(orig);
      var newArr = [],
        dates = {},
        newItem, i, j, cur;
      for (i = 0, j = orig.length; i < j; i++) {
        cur = orig[i];
        if (!(cur.date in dates)) {
          dates[cur.date] = {
            date: cur.date,
            rooms: []
          };
          newArr.push(dates[cur.date]);
        }
        dates[cur.date].rooms.push(cur);
      }

      return newArr;
    }
      

      
  }]);
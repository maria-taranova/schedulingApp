  'use strict';
 var date = new Date();
  var superGlobal = [];

  var booking = angular.module('bookingControllers', []);

  booking.controller("BookingCtrl", ["$scope", "$rootScope", "$timeout", "$q", "$log", '$http', '$location', '$mdSidenav', '$routeParams', 'ajaxcall', function($scope, $rootScope, $timeout, $q, $log, $http, $location, $mdSidenav, $routeParams, ajaxcall) {
      
                   /*Dates*/
       $scope.myDate = date;
 
      $scope.datePick = function(x){
         var d = new Date(x);
         date = d.yyyymmdd();
        
          console.log(date);
        superAjax(date);

      }
      
       /*Dates finished*/
      
    var userid = null;
    //Henry's ajax
    var data = {};
      
    
        var slots = {
        1: "8am",
        2: "9am",
        3: "10am",
        4: "11am",
        5: "12am",
        6: "1pm",
        7: "2pm",
        8: "3pm",
        9: "4pm",
        10: "5pm"
            
        }
        
       var roomNames = ['Santorini', 'BoraBora', 'Bali', 'Maldives', 'Fiji'];
      
      function superAjax(day){
          data.type = "getRoomSchedule";
          data.roomid = 1;
          data.rdate = day;
          ajaxcall.setData({
            url: "controllers/listen.php",
            data: data
          });
          ajaxcall.run(function(resp) {

            var tabb = [];
            var io = Object.keys(resp.days).toString();
            

            for (var i in resp.days) {
               
              //creatign object from ajax call;
                for (var ii in resp.days[i]) {
                        
                     var room = ii;
                                     
                    
                    for( var h in roomNames){
                        var t = roomNames[h]
                        console.log(t)
                        if(!resp.days[i][t]) {
                            resp.days[i][t] ={} 
                            
                        }else{
                               resp.days[i][t] = resp.days[i][t];//continue here
                        }
                    }
                      
                            for(var y = 1; y<=10; y++){
                                // console.log(resp.days[i][ii][y]);
                                if(!resp.days[i][ii][y]){//if the date is not booked
                                    var g = resp.days[i][ii][y];
                                    console.log(slots[y])
                                    resp.days[i][ii][y] = {booked: false, reserved: false, date: io, time: slots[y], room: room};
                                }else{
                                    resp.days[i][ii][y].booked = true;
                                    resp.days[i][ii][y].time = slots[y];
                                     resp.days[i][ii][y].room = room;
                                }
                            }


                }
                $scope.roomsSch = resp.days;
               console.log($scope.roomsSch);
            }
          })
                       };
      
        
      
      superAjax('2016-05-29');
      
      

    $scope.selectedIndex = 0;

function selectRoom(idx) {
  
      console.log(idx);
         //$scope.selected = idx;
         $scope.selectedIndex = idx;
    }
      
   /* var dummy = {
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
                };*/
   

 /*   data.type = "getrooms";
    data.rdate = date;
    console.log($scope.myDate);
    console.log(data.rdate);
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
      }
    }, function(resp) {

    });*/
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
      
      
      

    $scope.selectRoom = selectRoom;
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
             slots[ii].reserved = false;
        }
         console.log(slots)
        return slots;
    }
    
    $scope.reservations = [];



    var changeUrl = function(v) {
      var str = v;
      console.log($location);
      console.log($routeParams);
      $location.path(str);
    }

    $scope.toggle = function(item, list, e, ind) {
    // item.reserved = false;
        console.log(item);
     var idx = list.indexOf(item);
     

      //var room = e.target.attributes.data.value;
      //item.room = room;
      if (idx > -1) {
        item.reserved = false;
        list.splice(idx, 1);
       
      } else {
        if (item.booked) {
          return false;
        }
         item.reserved = true;
        list.push(item);
          
      }
      // console.log($scope.reservations);
      var f = transformArr(list);
      $scope.reservation = f;
      console.log(item);
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


 Date.prototype.yyyymmdd = function() {
   var yyyy = this.getFullYear().toString();
   var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   var dd  = this.getDate().toString();
   return yyyy +"-"+ (mm[1]?mm:"0"+mm[0]) + "-"+(dd[1]?dd:"0"+dd[0]); // padding
  };
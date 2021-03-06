  'use strict';
 var date = new Date();
 date = date.yyyymmdd();
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
      
   function Timing(z){
       console.log(z);
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
        10: {time: "5pm", booked: false},
        }
        var name = "";
        var tdate = date;
       
       for( var ii in slots){
         
            if(z[ii]){
                 slots[ii].booked = true;
                 name = z[ii].name;
                 tdate = z[ii].date;
             }
          
           // slots[ii].name = u;
            slots[ii].date = tdate;
            slots[ii].reserved = false;
        }
       
       
       
       
         console.log(slots)
        return slots;
    }

    function SingleRoom(room) {
    /*  var rooms = {
        Santorini: {},
        BoraBora: {},
        Bali: {},
        Maldives: {},
        Fiji: {}
        }
      */
    var rooms = {
       Santorini:{name: "Santorini", slots:{}},
        BoraBora:{name: "BoraBora", slots:{}},
           Bali:{name: "Bali", slots:{}},
        Maldives:{name: "Maldives", slots:{}},
        Fiji:{name: "Fiji", slots:{}}
     
        }
       for(var r in rooms){
           console.log(rooms[r]);
        if(room[r]){
            rooms[r].slots = new Timing(room[r]);
            }else {
           //var name = rooms[r].name; 
           // rooms[r] = {1:{name: name}};
            rooms[r].slots = new Timing(rooms[r])}
       }
      // return rooms;
        return rooms;
      }
      
      function superAjax(day){
          data.type = "getRoomSchedule";
          data.roomid = 1;
          data.rdate = day;
          ajaxcall.setData({
            url: "controllers/listen.php",
            data: data
          });
          ajaxcall.run(function(resp) {
            if(resp.status == 0){//if no booking exist
               console.log("YES");
               resp.days = {};
               resp.days[day] = {};
            
            }
            var ajaxDate = Object.keys(resp.days).toString();
            //var io = Object.keys(resp.days).toString();
            
            var obj = new SingleRoom(resp.days[ajaxDate]);
            $scope.roomsSch = {};
                $scope.roomsSch.date = ajaxDate;
                $scope.roomsSch.rooms = obj ;
                console.log($scope.roomsSch);
         /*   for (var i in resp.days) {
              
              //creatign object from ajax call;
                for (var ii in resp.days[i]) {
                     var g = new Timing(resp.days[i][ii]);
                     resp.days[i][ii]= g;
                    
                     console.log(g);
                     var room = ii;
               /*                      
                    
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
                            
                   

                }*/
               /* var sigleDate = new SingleRoom(resp.days[i]);
                
                $scope.roomsSch = {};
                $scope.roomsSch.date = ajaxDate;
                $scope.roomsSch.rooms = sigleDate;
                console.log($scope.roomsSch);
            }*/
          })
                       };
      
        
      
      superAjax('2016-05-29');
      
      

    $scope.selectedIndex = 0;
    var island = "";
function selectRoom(idx, key) {
  
        console.log(key);
         //$scope.selected = idx;
         $scope.selectedIndex = idx; 
         island  = key;
     console.log(island );
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
          item.room =  $scope.selectedIndex;
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



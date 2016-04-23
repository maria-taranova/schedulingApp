(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl ($scope, $log, $mdSidenav) {
     var dummy = {
                hawai: [{name: ''},
                        {title: "monday", content: "some cnt for monday"},
                        {
                        title: "tuesday", content: "some cnt for tuesday", 
                        slots: [
                        {time: "9:00am", booked: false}, 
                        {time: "10:00am", booked: true},
                        {time: "11:00am", booked: false},
                        {time: "12:00am", booked: false},
                         {time: "1:00pm", booked: true},
                         {time: "2:00pm", booked: true},
                         {time: "3:00pm", booked: false},
                         {time: "4:00pm", booked: false},
                         {time: "5:00pm", booked: true}
                        
                        ]
                    }
                ], 
                bermuda: [{title: "sunday"},{title: "saturday"}]
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
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
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
    }



$scope.selected = [];

      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

  }
})();



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/
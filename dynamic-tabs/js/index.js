(function () {
  'use strict';
  angular
      .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl ($scope, $log, $mdSidenav) {
    var tabs = [
          { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."}
        ],
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
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
 
    $scope.selected     = null;
    $scope.users        = [{name: "hawai", 
                           tabs: [
                        { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."}]}, {name: "bermuda"} ];
    $scope.selectUser   = selectUser;
    $scope.toggleList   = toggleUsersList;
    console.log($scope.tabs)
    
    // Load all registered users


    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
    
    /*  $scope.tabs = [
          { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
          { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
          { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
          { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
          { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
          { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}];*/
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
   $scope.reservation = [];
      
    $scope.reserve = function(x){
        
        $scope.reservation.push(x)
        console.log($scope.reservation);
    } 
    var dummy = {
                hawai: [
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
    
      function selectUser (user) {
      console.log(user.name);
      $scope.tabs = dummy[user.name];
    
          
         /* var ff = $scope.users.filter(
          function(e) { if(e.name == user.name){
                console.log(e.tabs)
              return e.tabs
          } })*/
      $scope.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }





  }
})();



/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be in foundin the LICENSE file at http://material.angularjs.org/license.
**/
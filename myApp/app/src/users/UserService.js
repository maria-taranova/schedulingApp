(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Room 1: Bermuda',
        avatar: 'svg-1',
        content: 'Any rewarding endeavor requires persistence, consistency and adaptability; values of which are difficult to endorse while working from your humble bedroom, a loud coffee shop or quiet library.'
      },
      {
        name: 'Room 2: Hawaii',
        avatar: 'svg-1',
        content: 'Large open space in Manhattan hottest neighborhood, the intersection of Howard and Crosby Streets. Startups, fashion, design, retail. '
      }
      
      
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();

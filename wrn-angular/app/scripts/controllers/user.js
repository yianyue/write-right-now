'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # UserCtrl
 * Controller of the wrnApp
 */

app.controller('UserCtrl', ['UserService', 'localStorageService', '$window', function (UserService, localStorageService, $window) {
  
  var ctrl = this;
  
  ctrl.register = function(){
    UserService.save({user: ctrl.info},
      function success(rsp){
        console.log('Success' + JSON.stringify(rsp));
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
    );
  };

}]);
  
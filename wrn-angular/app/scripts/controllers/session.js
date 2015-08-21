
'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # SessionCtrl
 * Controller of the wrnApp
 */

app.controller('SessionCtrl', ['SessionService', 'localStorageService', '$location', function (SessionService, localStorageService, $location) {
  
  var ctrl = this;

  ctrl.login = function(){
    console.log(ctrl.email, ctrl.password);
    SessionService.login({email: ctrl.email}, {password: ctrl.password},
      function success(rsp){
        localStorageService.set('user', rsp);
        $location.path('/entries');
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
      );
  }

}]);
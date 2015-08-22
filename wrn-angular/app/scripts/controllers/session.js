
'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # SessionCtrl
 * Controller of the wrnApp
 */

app.controller('SessionCtrl', ['SessionService', 'localStorageService', '$window', function (SessionService, localStorageService, $window) {
  
  var ctrl = this;

  ctrl.login = function(){
    localStorageService.clearAll();
    SessionService.login(ctrl.info,
      function success(rsp){
        localStorageService.set('user', rsp);
        console.log($window.location.href);
        $window.location.href ='/#/entries';
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
    );
  };

  ctrl.logout = function(){
    localStorageService.clearAll();
    $window.location.href ='/';
  };

}]);
'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # UserCtrl
 * Controller of the wrnApp
 */

app.controller('UserCtrl', ['UserService', 'SessionService', 'Data', '$window', '$rootScope', function (UserService, SessionService, Data, $window, $rootScope) {
  
  var ctrl = this;
  
  $rootScope.currentUser = Data.loadUser();
  
  ctrl.logout = function(){
    Data.clear();
    $window.location.href ='/';
  };

  ctrl.login = function(){
    Data.clear();
    SessionService.login(ctrl.info,
      function success(rsp){
        Data.setUser(rsp);
        $rootScope.currentUser = rsp;
        $window.location.href ='/#/entries';
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
    );
  };

  ctrl.register = function(){
    // Have to send the info back with a user key, otherwise the password and password_confirmation doesn't get saved
    UserService.save({user: ctrl.info},
      function success(rsp){
        Data.setUser(rsp);
        $rootScope.currentUser = rsp;
        $window.location.href ='/#/entries';
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
    );
  }

}]);
  
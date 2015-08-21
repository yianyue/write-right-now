
'use strict';

/**
 * @ngdoc overview
 * @name wrnApp
 * @description
 * # wrnApp
 *
 * Main module of the application.
 */

// Won't need all of these modules

var app = angular
  .module('wrnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'LocalStorageModule',
    'ngQuill',
    'FBAngular',
  ]);

app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]);

// app.config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.useXDomain = true;
//   delete $httpProvider.defaults.headers.common['X-Requested-With'];
// // $httpProvider.defaults.useXDomain = true;
// // $httpProvider.defaults.withCredentials = true;
// // delete $httpProvider.defaults.headers.common["X-Requested-With"];
// // $httpProvider.defaults.headers.common["Accept"] = "application/json";
// // $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
//   }
// ]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/about.html',
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'SessionCtrl',
      controllerAs: 'session'
    })
    .when('/entries', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/entries/:id', {
      templateUrl: 'views/entry.html',
      controller: 'EntryCtrl',
      controllerAs: 'entry'
    })
    .otherwise({
      redirectTo: '/'
    });
});

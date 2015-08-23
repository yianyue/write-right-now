
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
    // 'angularCharts'
  ]);

app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]);

app.config(['$httpProvider', function($httpProvider) {
  $httpProvider
    .interceptors.push(function($q, localStorageService){
      return {
        request: function(config){
          if (localStorageService.get('user')) {
            config.headers['token'] = localStorageService.get('user').token;
            config.headers['email'] = localStorageService.get('user').email;
          };
          return config;
        }
      }
    }
    );
  }
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'UserCtrl',
      controllerAs: 'user'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'UserCtrl',
      controllerAs: 'user'
    })
    .when('/entries', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/entries/:id', {
      templateUrl: 'views/entry.html',
      controller: 'EntryCtrl',
      controllerAs: 'entry',
      navigationClass: 'fs-navbar'
    })
    .when('/stats', {
      templateUrl: 'views/stats.html',
      controller: 'StatsCtrl',
      controllerAs: 'stats'
    })
    .otherwise({
      redirectTo: '/entries'
    });
});

// ViewCtrl for the navigation bar
app.controller("ViewCtrl", ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
  $scope.$on("$routeChangeSuccess", function(event, current, previous) {
    if (current.$$route){
      $scope.navigationClass = current.$$route.navigationClass;
    };
    if (!$rootScope.currentUser && current.$$route.originalPath !== '/register'){
      $location.path('/login');
    };
  });
}]);


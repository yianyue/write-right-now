
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
    'chart.js'
  ]);

app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]);

// Optional angular chart config
app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      // colours: ['Green', 'Gray'],
      // responsive: false,
    });
    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      // datasetFill: false
    });
    ChartJsProvider.setOptions('Doughnut',{
      percentageInnerCutout : 75,
    });
    // Irish green, light gray, and a hot pink
    Chart.defaults.global.colours = ['#009E60', '#DCDCDC', '#D11565'];
  }])

// Interceptor to send user token and email with every request
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
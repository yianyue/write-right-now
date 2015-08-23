
'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wrnApp
 */

app.controller('StatsCtrl', ['Data','Stats', function (Data, Stats) {
  
  var ctrl = this;

  Data.loadEntries(function(days){
    ctrl.days = days;
    ctrl.longestStreak = Stats.calcStreak(days);
    ctrl.dailyAvg = Stats.calcAverage(days);
  });


}]);
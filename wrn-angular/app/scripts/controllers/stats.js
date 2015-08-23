
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
  
  // Data.loadEntries(function(entries){
  //   ctrl.entries = entries;
    ctrl.longestStreak = Stats.calcStreak();
  // });


}]);
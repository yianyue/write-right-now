
'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wrnApp
 */

app.controller('StatsCtrl', ['Data','Stats','$scope', function (Data, Stats, $scope) {
  
  var ctrl = this;

  // ctrl.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  // ctrl.data = [300, 500, 100];

  Data.loadEntries(function(days){
    // ctrl.days = days;
    ctrl.overview = Stats.getStats(days);
    ctrl.data = [ctrl.overview.daysCompleted, ctrl.overview.daysPartial, ctrl.overview.daysSkipped];
    ctrl.labels = ['Days Completed', 'Days Written', 'Days Skipped'];
  });


}]);
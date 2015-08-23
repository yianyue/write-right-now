
'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wrnApp
 */

app.controller('MainCtrl', ['Data','Stats', function (Data, Stats) {
  
  var ctrl = this;
  
  // max number of characters (include html tags) of content to show on the main page
  ctrl.previewLimit = 100;

  Data.loadEntries(function(entries){
    ctrl.entries = entries;
    ctrl.days = Stats.matchEntriesToDates(ctrl.entries);
  });

}]);

'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wrnApp
 */

app.controller('MainCtrl', ['Data', function (Data) {
  
  var ctrl = this;
  
  var errorRsp = function(rsp){ console.log('Error' + JSON.stringify(rsp)); };

  var getDates = function(startDate, endDate){
    var dateArray = [];
    var currentDate = new Date(startDate);
    endDate = new Date(endDate);
    while (currentDate <= endDate) {
      dateArray.push( new Date (currentDate) );
      currentDate.setDate(currentDate.getDate()+1);
    }
    return dateArray;
  };

  Data.loadEntries(function(entries){
    ctrl.entries = entries;
    // ctrl.dates = getDates(entries[entries.length-1].created_at, entries[0].created_at);
  });

  // max number of characters of content to show on the main page
  ctrl.previewLimit = 100;

}]);
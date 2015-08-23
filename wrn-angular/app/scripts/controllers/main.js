
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
  
  // max number of characters (include html tags) of content to show on the main page
  ctrl.previewLimit = 100;
  
  var getDates = function(startDate, endDate){
    var dateArr = [];
    var currentDate = new Date(startDate);
    endDate = new Date(endDate);
    while (currentDate <= endDate) {
      dateArr.push({
        date: new Date (currentDate),
        entry: null
      });
      currentDate.setDate(currentDate.getDate()+1);
    }
    return dateArr;
  };

  var matchEntriesToDates = function(entries, days){
    days.forEach(function(day, i, days){
      entries.forEach(function(entry, i, entries){
        var entryDate = new Date(entry.created_at);
        if(entryDate.setHours(0,0,0,0) == day.date.setHours(0,0,0,0)){
          day.entry = entry;
        }
      });
    });
    console.log(days);
  };

  Data.loadEntries(function(entries){
    ctrl.entries = entries;
    ctrl.days = getDates(entries[entries.length-1].created_at, entries[0].created_at);
    matchEntriesToDates(ctrl.entries, ctrl.days);
  });

}]);
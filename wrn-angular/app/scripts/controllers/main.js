
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
    console.log(entries);
    ctrl.dates = getDates(entries[entries.length-1].created_at, entries[0].created_at);
    console.log(ctrl.dates);
  });

  Data.loadUser(function(user){
    ctrl.user = user;
  });

  // max number of characters of content to show on the main page
  ctrl.previewLimit = 100;

  // add and remove entry will not be available to the user.
  ctrl.addEntry = function () {
    // TODO: create entry and immediately display it; update when the response comes back
    var newEntry = Data.addEntry({},
      function success(rsp){
        console.log('Success' + JSON.stringify(rsp));
        ctrl.entries.push(rsp);
      },
      errorRsp
    );
  };

}]);
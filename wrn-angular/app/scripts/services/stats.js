// Service to compile user statistics

app.factory('Stats', ['localStorageService', function (localStorageService) {

  function getDates(startDate, endDate){
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
  
  return {
    matchEntriesToDates: function(entries){
      var days = getDates(entries[entries.length-1].created_at, entries[0].created_at);
      days.forEach(function(day, i, days){
        entries.forEach(function(entry, i, entries){
          var entryDate = new Date(entry.created_at);
          if(entryDate.setHours(0,0,0,0) == day.date.setHours(0,0,0,0)){
            day.entry = entry;
          }
        });
      });
      return days;
    },
  };

}]);
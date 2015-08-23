'use strict';

// Service to compile user statistics

app.factory('Stats', ['localStorageService', function (localStorageService) {

  // var days = localStorageService.get('days')

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

  function calcCompleted(days){
    var streaks = [0];
    var completed = 0;
    var skipped = 0;
    var j = 0
    days.forEach(function(day, i, days){
      if (day.entry && day.entry.word_count >= day.entry.goal){
        streaks[j]++;
        completed ++;
      }else {
        j++;
        streaks[j] = 0;
        if(day.entry==null){
          skipped ++;
        };
      }
    });
    return {
      streak: Math.max.apply(null,streaks),
      daysCompleted: completed,
      daysSkipped: skipped,
      daysPartial: days.length - completed - skipped
    };
  };

  function calcSumAvg(days){
    var sum = 0;
    days.forEach(function(day, i, days){
      sum += day.entry ? day.entry.word_count : 0;
    });
    var avg = sum/days.length;
    return {
      dailyAvg: avg, 
      totalWords:sum
    };
  }
  
  return {
    matchEntriesToDates: function(entries){
      // debugger;
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
    getStats: function(days){
      var obj = {};
      obj.totalDays = days.length;
      jQuery.extend(obj, calcSumAvg(days), calcCompleted(days));
      console.log(obj);
      return obj;
    }    
    
  };

}]);
'use strict';

// Service to compile user statistics

app.factory('Stats', ['localStorageService', function (localStorageService) {

  // var days = localStorageService.get('days')

  function getDates(startDate, endDate){
    var dateArr = [];
    var currentDate = new Date(startDate);
    currentDate.setHours(0,0,0,0);
    endDate = new Date(endDate);
    endDate.setHours(0,0,0,0);
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
    var j = 0;
    days.forEach(function(day, i, days){
      if (day.entry && day.entry.word_count >= day.entry.goal){
        streaks[j]++;
        completed ++;
      } else {
        j++;
        streaks[j] = 0;
        if (day.entry==null || day.entry.word_count == 0){
          skipped ++;
        };
      };
    });
    return { 
      streak: Math.max.apply(null,streaks), 
      data: [completed, days.length - completed - skipped, skipped]
    };
  };

  function calcWordStats(days){
    var sum = 0;
    var obj = {
      data: [[]],
      labels: []
    };
    days.forEach(function(day, i, days){
      var date = new Date(day.date);
      obj.labels[i] = date.toDateString();
      var words = day.entry ? day.entry.word_count : 0;
      obj.data[0][i] = words;
      sum += words;
    });
    var avg = Math.round(sum/days.length);
    obj.dailyAvg = avg;
    obj.totalWords = sum;
    return obj;
  };
  
  return {
    matchEntriesToDates: function(entries){
      var days = getDates(entries[0].created_at, entries[entries.length-1].created_at);
      days.forEach(function(day, i, days){
        entries.forEach(function(entry, i, entries){
          var entryDate = new Date(entry.created_at);
          var date = new Date(day.date);
          if(entryDate.setHours(0,0,0,0) == day.date.setHours(0,0,0,0)){
            day.entry = entry;
          }
        });
      });
      console.log(days);
      return days;
    },
    getStats: function(days){
      var todayEntry = days[days.length-1].entry;
      var today = { 
        progress: Math.round(todayEntry.word_count/todayEntry.goal* 100),
        data: [todayEntry.word_count, Math.max(todayEntry.goal-todayEntry.word_count, 0)],
        labels: ['Words Written Today', 'Words to Goal']
      };
      var completion = {
        totalDays: days.length,
        labels: ['Days of Victory','Days You Tried', 'Days Skipped']
      };
      jQuery.extend(completion,calcCompleted(days) );
      var words = {
        labels: [],
        data:[]
      };
      jQuery.extend(words,calcWordStats(days))
      return {
        today: today,
        completion: completion,
        words: words
      };
    }        
  };

}]);
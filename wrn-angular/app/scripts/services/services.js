app.factory('EntryService', ['$resource', function($resource){
  return $resource("http://localhost:3000/api/entries/:id", {}, {
    get: {method: 'GET', cache: false, isArray: true},
    getEntry: {method: 'GET', cache: false, isArray: false},
    save: {method: 'POST', cache: false, isArray: false},
    update: {method: 'PUT', cache: false, isArray: false},
  });
}]);

app.factory('UserService', ['$resource', function($resource){
  return $resource('http://localhost:3000/api/users', {}, {
    save: {method: 'POST', cache: false, isArray: false},
    update: {method: 'PUT', cache: false, isArray: false},
  });
}]);

app.factory('SessionService', ['$resource', function($resource){
return $resource('http://localhost:3000/api/session', {}, {
    login: {method: 'POST', cache: false, isArray: false},
    logout: {method: 'DELETE', cache: false, isArray: false}
  });
}]);

app.factory('Data', ['EntryService', 'UserService', 'localStorageService', function (EntryService, UserService, localStorageService) {

  var entries = localStorageService.get('entries');

  function getEntries(complete) {
    EntryService.get({},
      function success(rsp){
        entries = rsp;
        localStorageService.set('entries', rsp)
        complete(entries);
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
    );
  };

  function updateEntry(complete){
EntryService.update
  }
  
  return {
    loadEntries: function(complete){
      if(entries) {
        complete(entries);
      } else {
        getEntries(complete);
      }
    },
    loadUser: function(){
      return localStorageService.get('user');;
    },
    clear: function(){
      localStorageService.clearAll();
    },
    setUser: function(user){
      localStorageService.set('user', user);
    },
    getEntry: EntryService.getEntry,
    saveEntry: function(complete){
      if(entry){
        complete(entry);
      } else {
        updateEntry(complete);
      }
    },
    updateUser: function(user){
      // localStorageService.set('user', user);
    }
  };

}]);
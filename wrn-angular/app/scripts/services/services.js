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
    login: {method: 'POST'},
    logout: {method: 'DELETE'}
  });
}]);

app.factory('Data', ['EntryService', 'UserService', 'localStorageService', function (EntryService, UserService, localStorageService) {

  var user = localStorageService.get('user');
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
  
  return {
    loadEntries: function(complete){
      if(entries) {
        complete(entries);
      } else {
        getEntries(complete);
      }
    },
    // loadUser: function(complete){
    //   if (user) {
    //     complete(user);
    //   } else {
    //     getUser(complete);
    //   }
    // },
    loadUser: function(){
      return user;
    },
    getEntry: EntryService.getEntry,
    updateEntry: EntryService.update,
    addEntry: EntryService.save,
    updateUser: function(user){
      // localStorageService.set('user', user);
    },
  };

}]);
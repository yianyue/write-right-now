app.factory('Api', ['$resource', function($resource){
  return $resource("http://localhost:3000/api/entries/:id", {}, {
    get: {method: 'GET', cache: false, isArray: true},
    getEntry: {method: 'GET', cache: false, isArray: false},
    save: {method: 'POST', cache: false, isArray: false},
    update: {method: 'PUT', cache: false, isArray: false},
  });
}]);

app.factory('User', ['$resource', function($resource){
  return $resource('/api/user', {}, {
    get: {method: 'GET', cache: false, isArray: false},
  });
}]);

app.factory('Data', ['Api', 'User', function (Api, User) {

  var user;
  var entries;

  function getUser(complete) {
    User.get({},
      function success(rsp){
        console.log('got the user');
        user = rsp;
        complete(user);
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
    );
  };

  function getEntries(complete) {
    Api.get({},
      function success(rsp){
        console.log('got the entries');
        entries = rsp;
        complete(entries);
      },
      function error(rsp){
        console.log('Error' + JSON.stringify(rsp));
      }
    );
  };

  // var data = data || Api.get({}, success, error);
  
  return {
    loadEntries: function(complete){
      if(entries) {
        complete(entries);
      } else {
        getEntries(complete);
      }
    },
    loadUser: function(complete){
      if (user) {
        complete(user);
      } else {
        getUser(complete);
      }
    },
    getEntry: Api.getEntry,
    updateEntry: Api.update,
    addEntry: Api.save,
    updateUser: function(user){
      // localStorageService.set('user', user);
    },
  };

}]);



// Disable localstorage for now.

// app.factory('Data', ['localStorageService', 'Api', function (localStorageService, Api) {

//     var user = localStorageService.get('user') || dummyUser;

//     var loadEntries = function(response){
//       localStorageService.set('entries', data);
//       console.log("Success:" + JSON.stringify(response));
//     };

//     var error = function(response){
//       console.log("Error:" + JSON.stringify(response));
//     }

//     // TODO: clear out localStorage on user logout;
//     var data = localStorageService.get('entries') || Api.get({}, loadEntries, error);

//     return {
//       getAllEntries: function(){
//         return data;
//       },
//       getEntry: function(id){
//         var i = 0;
//         do {
//           if (data[i].id == id){
//             var entry = data[i];
//           }
//           i ++;
//         } while (!entry && i < data.length);
//         return entry;        
//       },
//       updateEntry: function(entry){
//         var i = 0;
//         do {
//           if (data[i].id == entry.id){
//             data[i] = entry;
//           }
//           i ++;
//         } while (!entry && i < data.length);
//         localStorageService.set('entries', data);
//       },
//       addEntry: function(){
//         Api.save({}, 
//           function success(rsp){
//             console.log('Success:' + JSON.stringify(rsp));            
//           },
//           error
//         );
//       },
//       getUser: function(){
//         return user;
//       },
//       updateUser: function(user){
//         localStorageService.set('user', user);
//       },
//     };

// }]);

// Test Data

var dummyUser = { 
  username: 'Dummy',
  goal: 100,
}

'use strict';

/**
 * @ngdoc function
 * @name wrnApp.controller:EntryCtrl
 * @description
 * # EntryCtrl
 * Controller of the wrnApp
 */

// TODO: figure out why document.element.requestFullscreen etc. didn't work
// array ensures angular can still find the dependencies after minification
app.controller('EntryCtrl', ['$routeParams', '$scope', 'Data', 'Fullscreen', 
  function($routeParams, $scope, Data, Fullscreen) {

    var ctrl = this;

    // can only trigger fullscreen from user controlled gestures.
    $('nav').delay(2000).queue(function(){
      $(this).addClass('fs-navbar');
    });
    
    ctrl.countWords = function() {
      // replace all html tags with space
      var words = ctrl.currentEntry.content.replace(/<.*?>/g, ' ');
      // match all non-whitespace
      return words.match(/\S+/g) ? words.match(/\S+/g).length : 0;
    };

    ctrl.updateEntry = function(){
      ctrl.currentEntry.word_count = ctrl.countWords();
      Data.updateEntry({id: $routeParams.id}, {entry: ctrl.currentEntry},
        function success(rsp){
          console.log('Success' + JSON.stringify(rsp));
        },
        function error(rsp){
          console.log('Error' + JSON.stringify(rsp) );
        }
      );
    };

    ctrl.toggleFullscreen = function(){
      if (Fullscreen.isEnabled()){
        Fullscreen.cancel();
      } else {
        Fullscreen.all();
      }
      ctrl.editor.quill.setSelection(ctrl.editor.length, ctrl.editor.length);
    };

    $scope.$on('editorCreated', function (event, args) {
      ctrl.editor = args.editor;
      // enable edit only if entry date is today
      // TODO: check if user can game this by changing their computer's date
      var today = new Date();
      Data.getEntry({id: $routeParams.id},
        function success(rsp){
          console.log('Success' + JSON.stringify(rsp));
          ctrl.currentEntry = rsp;
          var entryDate = new Date(ctrl.currentEntry.created_at);
          if (entryDate.setHours(0,0,0,0) == today.setHours(0,0,0,0)){
            ctrl.editor.enable();
          }
          // focus the editor and go to the end of the text
          ctrl.editor.quill.setSelection(ctrl.editor.length, ctrl.editor.length);
        },
        function error(rsp){
          console.log('Error' + JSON.stringify(rsp) );
        }
      );      
    });
}]);



/* global Spotify, $*/
'use strict';
// 1.) log message when jquery is loaded
$(document).ready(function(){
  debugger;
  console.log('To Do');

  //get the dom element with the ID of spotify-songs
  //pass it to the init method for spotify.playlist

  //2. Invoike init method of to do list, set variable songs to the output
  var tasks = Todo.Tasklist.init($('#tasklist'));

  //8. var all to do is now an array,
  //invoke the render method
Todo.Tasklist.render(tasks);
});

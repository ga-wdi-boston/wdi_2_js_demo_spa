/* global Spotify, $*/
'use strict';

$(document).ready(function(){

  // 1. Logging a message to the console
  console.log('Time to build a Playlist for Spotify');

  // 2. Get DOM element with id of #spotify-songs
  // 3. Pass it as argument to init method in playlist object
  // **(next go to play_list.js)**
  // 13. Now the tasks from the todo_list tasks array live in var allTasks
  var songs = Spotify.PlayList.init($('#spotify-songs'));

  // 14. The render method in the PlayList object within Spotify object
  // is called, with the value songs passed as the argument
  // **(next go to play_list.js)**
  Spotify.PlayList.render(songs);


});

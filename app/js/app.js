/* global Spotify, $*/
'use strict';
// 1. Log something
$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');

// 2. Get the DOM element of 'spotify-songs'
// and pass it to the init method for Spotify.Playlist
  var songs = Spotify.PlayList.init($('#spotify-songs'));
// Invoke the Spotify playlist render method for the array songs
  Spotify.PlayList.render(songs);
});

/* global Spotify, $ */
'use strict';

$(document).ready(function(){
  // 1. Log something
  console.log('Time to build a Playlist for Spotify');

  // Get the DOM Element with id of 'spotify-songs'
  // And pass it to the init method for Spotify.Playlist
  
  // 2. Invoke the playlist init method, pass it the DOM element
  // for the ul for the playlist.
  var songs = Spotify.PlayList.init($('#spotify-songs'));

  // Invoke the Spotify playlist render method.
  Spotify.PlayList.render(songs);
});

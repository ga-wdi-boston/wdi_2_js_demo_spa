/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');

  debugger;
  // Get the DOM Element with id of 'spotify-songs'
  // And pass it to the init method for Spotify.Playlist
  var songs = Spotify.Playlist.init($('#spotify-songs'));

  // Invoke the Spotify playlist render method.
  Spotify.playList.render(songs);
});

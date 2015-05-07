/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');
// Get the DOM element with id of 'spotify-songs'
//And pass it to the init method for Spotify.Playlist
  var songs = Spotify.Playlist.init($('#spotify-songs'));


// Invoke the spotify playlist render method.
Spotify.Playlist.render(songs);

});

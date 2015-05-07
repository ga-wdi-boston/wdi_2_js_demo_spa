/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');
  //get the DOM elements with id of 'spotify-songs' and pass it to init method for Spotify.Playlist
  var songs = Spotify.PlayList.init($('#spotify-songs'));

  //invoke Spotify.PlayList render method
  Spotify.PlayList.render(songs);
});

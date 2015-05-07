/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');
  var songs = Spotify.PlayList.init($('#spotify-songs'));
  Spotify.PlayList.render(songs);
});

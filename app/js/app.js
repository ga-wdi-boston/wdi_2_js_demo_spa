/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');

  //get the DOM Element with id of 'spotify-songs'
  //and pass it to the init method for Spotify.Playlist
  //1. invoke init
  var songs = Spotify.PlayList.init($('#spotify-songs'));

  //Invoke the Spotify playlist render method
  //4.then we render songs
  Spotify.PlayList.render(songs);
});


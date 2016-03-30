/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');

  //get the DOM Element with id of 'spotify-songs'
  //and pass it to the init method for Spotify.Playlist

  //invoke the playlist which returns an object with 2 methods
  //init and render
  var pl = Spotify.PlayList;

  //invoke the init method of pl
  pl.init($('#spotify-songs'));

  pl.render();
});


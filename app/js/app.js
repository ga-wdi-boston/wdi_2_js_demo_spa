/* global Spotify, $*/
'use strict';

//#1.Gets document ready by getting rid of Namespace
$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');

  //#2. calling the init method on the playlist and passing in the id spotify-songs. Next goes to playlist.js.
  //Get the DOM Element with the ID of 'spotify-songs'
  //And pass it to the init method for Spotify.Playlist
  //Pass in the DOM html element for the list

  var songs = Spotify.PlayList.init($('#spotify-songs'));
  //#7 call render on the playlist with all the songs
  Spotify.PlayList.render(songs);
});

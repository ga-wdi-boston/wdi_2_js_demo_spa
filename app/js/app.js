/* global Spotify, $*/
'use strict';
// 1. Loading the file, linked into the index.html, as well as the link to song.js and play_list.js
$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');

  //2. we initialize the playlist with whatever has the DOM id spotify-songs and store it into the variable songs
  // get the DOM with the id of 'spotify-songs' and pass it
  // to the init method for Spotify.Playlist
  var playlistDomElement = $('#spotify-songs')
  var songs = Spotify.PlayList.init(playlistDomElement);

  // 9. I invoke the render method on the playlist object
  // Invoke theSpotify playlist render method.
  Spotify.PlayList.render(songs);

});

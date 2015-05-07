/* global Spotify, $*/
'use strict';

$(document).ready(function(){

//1. Log message when jquery is loaded
  console.log('Time to build a Playlist for Spotify');

//Get the dom element with the ID of spotify-songs
//Pass it to the init method for SPotify.Playlist

// jQuery('html thing') === $('html thing')
// jQuery selector grabs a DOM element

var playlistDomElement = $('#spotify-songs');

// 2. Invoke the init method on SPotify.Playlist, set variable allSongs to the output

  var allSongs = Spotify.Playlist.init(playlistDomElement);
  // 8. var allSongs is now an array. Now we invoke the playlist's datRender method passing allSongs as the parameter

  Spotify.Playlist.datRender(allSongs);
});

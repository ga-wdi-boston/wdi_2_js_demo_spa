/* global Spotify, $*/
'use strict';


$(document).ready(function(){

  // 1. log message when jquery is loaded
  console.log('Time to build a Playlist for Spotify');

  // Get the dom element with the  ID of spotify-songs
  // Pass it to the init mehtod for  Spotify.Playlist

// jQuery('html thing') === $('html thing')
// jQuery selector grabs a DOM element
  var playlistDomElement = jQuery('#spotify-songs');

  //  2. Invoke init method on Spotify.Playlist, set variable songs to the output
  var allsongs = Spotify.Playlist.init(playlistDomElement);

  // 8. var allsongs is now an array,
  // invoke datRenderfunction with the array as an argument
  Spotify.Playlist.render(allsongs);
});

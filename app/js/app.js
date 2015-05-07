/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  //1. log message when jquery is loaded
  console.log('Time to build a Playlist for Spotify');

//get the DOM element with id of 'spotify-songs'
//and pass it to the init method for Spotify.PlayList

//jquery selector grabs a DOM  element.  you could use $ or 'jQuery'
var playlistDomElement = $('#spotify-songs');

//2. Invoke init method on spotify.playlist, set varible allsongs to the output
  var allsongs = Spotify.PlayList.init($('#spotify-songs'));

//8. var allsongs is now an array.  invoke renderfunction with the array as an argument.
  //invoke the Spotify playlist render method
  Spotify.PlayList.render(allsongs);
});

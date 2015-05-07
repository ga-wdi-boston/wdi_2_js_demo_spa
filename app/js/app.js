/* global Spotify, $*/
'use strict';

$(document).ready(function(){

  // 1.Log message when jquery is loaded
  console.log('Time to build a Playlist for Spotify');

  //invoke the getSongs function from play_list.js
  //Spotify.PlayList.getSongs();

  // debugger;

  //get the DOM element with id of 'spotify-songs' and pass it to the init method for spotify.playlist

  var playlistDomElement = $('#spotify-songs');
  // jQuery selector grabs a DOM element

  // 2. Invoke the playlist init method on the Spotify.Playlist, set variable songs to the output
  var allsongs = Spotify.PlayList.init(playlistDomElement);

  // 8. var allsongs is now an array, and you pass the array to the render method
  // 8 continued - invoke RenderFunction with the array as an argument
  Spotify.PlayList.render(allsongs);
});

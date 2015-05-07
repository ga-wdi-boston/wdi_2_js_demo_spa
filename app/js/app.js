/* global Spotify, $*/
'use strict';

$(document).ready(function(){

  //1.Log message when jquery is loaded

  console.log('Time to build a Playlist for Spotify');

  //Get the DOM Element with id of 'spotify-songs'
  //And pass it to the init method for Spotify.Playlist

  //2. Invoke the playlist init method, pass it the DOM element for
  //for the ul for the playlist
  var playlistDomElement = $('#spotify-songs'); //jquery selector grabs a DOM element; the $ is equivalent to jQuery
  var allsongs = Spotify.PlayList.init(playlistDomElement);

  //8. var allsongs is now an array, and passed it to the render method
  //Invoke the Spotify playlist render method
  Spotify.PlayList.render(allsongs); //notices play_list.js file from html file and defines the Spotify.Playlist and then loads app.js file and loads code in app.js from memory
});

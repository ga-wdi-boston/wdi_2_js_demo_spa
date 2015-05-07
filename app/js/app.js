/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  //1.Log message when jQuery is loaded
  console.log('Time to build a Playlist for Spotify');

//Get the DOM element with id of 'spotify-songs' and pass it to the init method for Spotify.Playlist
//2. Invoke init method on Spotify,Playlist, set var song to output

//jquery selector grabs a DOM element
 var playlistDomElement = $('#spotify-songs');
 var allSongs = Spotify.Playlist.init(playlistDomElement);

 //8.var allSongs is now an array, and you pass the array to the render method
 //invoke the Spotify playlist render method.
 Spotify.Playlist.render(allSongs);
});

/* global Spotify, $*/
'use strict';

//I have broken this down into 2 steps - the init function step and the render function step
//if you look through app, and play_list, and song .js, you will be able to follow which
//code belongs to each major event in the rendering of this list.

$(document).ready(function(){
  console.log('Time to build a Playlist for Spotify');
//1.a. When the dDOM is loaded, the init function is called on Spotify.Playlist.
//     this will identify the <ul> to append the songs to, and also return an array
//     of songs from the getSongs function.
//1.b. The array containing all of the song objects is stored in the variable "songs"

  var songs = Spotify.PlayList.init($('#spotify-songs'));

//2. The render function is run on Spotify.Playlist. this function takes the "songs"
//   array created by init, iterates over each song element and appends it as a list
//   item to the ul specified.

  Spotify.PlayList.render(songs);

});

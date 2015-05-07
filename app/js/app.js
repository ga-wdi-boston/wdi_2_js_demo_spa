/* global Spotify, $*/
'use strict';

$(document).ready(function(){
//Get the DOM Element with id of 'spotify-songs'
//And pass it to the init method for Spotify.Playlist
//2. Invoke the playlist init method, pass it the DOM element for the ul for the playlist.



//INVOKED the playlist, which return an object with 2 methods, init and rents
var pl = Spotify.PlayList;

var $playListDomElement = $('spotify-songs');

//pl does this:
// pl {
//   init: function(...){...};
//   render:function(...){...};
// }

pl.init($playListDomElement);
//Invoke the Spotify playlist render method
  pl.render();
});

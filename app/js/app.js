/* global Spotify, $*/
'use strict';

// once the document has been rendered by
//the browser
$(document).ready(function(){
  // 1. Log something
  console.log('Time to build a Playlist for Spotify');


  // Get the DOM Element with the
  // ID of 'spotify-songs'
  // and pass it to the init method // for Spotify.Playlist

  // 2. Invoke the playlist int method
  // and pass it the DOM element
  // for the ul for the PlayList

  var pl = Spotify.PlayList;
  // now Spotify.PlayList is an object
  // but it started as an IFFY (which is an immediately invoked function expression — as soon as it's processed by the Java virtual machine, it says invoke it, which returns and object, which we're using to invoke "init", and "render")

  // pl looks like this! — it an object that contains the methods for init
  // and render
  // {
  //      init: function(...){...}
  //      render: function(...){...}
  // }


  pl.init($('#spotify-songs'));

  pl.render();

});

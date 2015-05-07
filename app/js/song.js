'use strict';

//create a namespace
var Spotify = Spotify||{};


//constructor function for songs
Spotify.Song = function(songTitle,songDuration,songPrice,songArtist){
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist =songArtist;
};

//render this song to html
Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');
};


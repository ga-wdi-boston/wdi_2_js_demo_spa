//create name space;
'use strict';

var Spotify = Spotify||{};

//constructor function of songs
Spotify.Song= function(songTitle,songDuration,songPrice,songArtist){
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
}

Spotify.Song.prototype.render = function($playListElement,id){
  $playListElement.append('<li id= "song->' + id+ '" >' + this.title + '</li>');
  };



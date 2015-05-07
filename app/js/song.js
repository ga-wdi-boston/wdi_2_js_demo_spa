/* global Spotify, $*/

var Spotify = Spotify || {};

Spotify.Song = function(songTitle, songDuration, songPrice, songArtist){

  // 6 Constructing the song object
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;

}

// 12 perform render prototype method on each of the song objects from songArray.
// doing so appends the song object's title to the DOM
Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append("<li id='song-"+id+"''>"+this.title+"</li>");

}


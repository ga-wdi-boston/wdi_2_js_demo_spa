// create a namespace
var Spotify = Spotify || {};

// 6 the songs are created with this constructor
//create a construction function for Song
Spotify.Song = function(songTitle, songDuration, songPrice, songPrice, songArtist) {
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
}

// 7 I add a method render to the object constructor Song

// 11. this is also the final step, of sending back (appending) to the DOM.

// this will render this song to HTML
Spotify.Song.prototype.render = function($playListElement, id) {
  $playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');
}

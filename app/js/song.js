//create a namespace
var Spotify = Spotify || {};

//create a constructor function for songs
Spotify.Song = function(songTitle, songDuration, songPrice, songArtist) {
  // 6. Constructing the Song object

  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
};

//this will render this song to HTML
// 12. Perform render prototype method on each of the songs objects in songArray
// doing so appends the song object's title to the DOM
Spotify.Song.prototype.render = function($playListElement, id) {
  $playListElement.append('<li id="song-' + this.id + '">' + this.title + '</li>');
}

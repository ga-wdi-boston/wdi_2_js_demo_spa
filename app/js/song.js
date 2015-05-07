//Create a Namespace

var Spotify = Spotify || {};
//create a constructor function for songs
Spotify.Song = function(songTitle, songDuration, songPrice, songArtist) {
  //6. Constructing the song object
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
};

//12. perform render prototype method on each of the song objects from songArray. Doing so adds the song object's title to the DOM
//this will render this song to HTML
Spotify.Song.prototype.render = function($playlistElement, id) {
  $playlistElement.append('<li id="song-' + id + '">' + this.title + '</li>');
};

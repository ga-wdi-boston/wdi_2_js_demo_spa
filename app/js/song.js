// create namespace

var Spotify = Spotify || {};

// create a constructor function for song
Spotify.Song = function(songTitle, songPrice, songDuration, songArtist) {
  //6. Constructing the Song object by getting the information from the arguments and setting them to local object variables.
 this.title = songTitle;
 this.price = songPrice;
 this.duration = songDuration;
 this.artist = songArtist;
};

// this will render this song to html
// this represents them in html
Spotify.Song.prototype.render = function(  $playListElement, id) {
  // 12. For the first element from songsArray, append a li element with id song- and then the id, and then the title, and then close the li tags.
 $playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');
}

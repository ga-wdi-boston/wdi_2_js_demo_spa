//create a namesapce

var Spotify = Spotify || {};


//Constructor function for song
Spotify.Song = function(songTitle, songDuration, songPrice, songArtist){
  this.title = songTitle;
//6. Constructing the song object
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
}

//12. Perform render prototype method on each of the songs (or objects) from songsarray
//doing so appends the song object's title to the DOM
//This will render this song to HTML
Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');
}

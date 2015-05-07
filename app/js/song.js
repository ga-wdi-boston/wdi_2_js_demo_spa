//create a namespace

var Spotify = Spotify || {};

//constructor function for songs
Spotify.Song = function(songTitle, songDuration, songPrice, songArtist){
//6. constructing the song object
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
};
//12. perform render prototype method on each of the song objects from songArray
//doing so appends the the song object's title to the DOM
//this will render this song to html
Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append('<li id="song-' + id + '" >' + this.title + '</li>');
}

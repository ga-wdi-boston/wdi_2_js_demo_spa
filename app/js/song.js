/* global Spotify, $*/
var Spotify = Spotify ||{};

//Constructor function for songs.
Spotify.Song = function(songTitle, songDuration, songPrice, songArtist){
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
};
// This will render this song to HTML.
Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');
}

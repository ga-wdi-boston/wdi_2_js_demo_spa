/* global Spotify, $*/

var Spotify = Spotify || {};

//Constructor function for songs
Spotify.Song = function (songTitle, songPrice, songDuration, songArtist){
  this.title = songTitle;
  this.price = songPrice;
  this.duration = songDuration;
  this.artist = songArtist;
};

//This will render this song to html:
Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append('<li id="song-' + id.toString() + '" >'
}

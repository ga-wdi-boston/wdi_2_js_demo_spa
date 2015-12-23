// create namespace
var Spotify = Spotify || {};

//3. Create Constructor function for songs
Spotify.Song = function (songTitle, songDuration, songPrice, songArtist) {
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
};
//4. Create accessor function for render
Spotify.Song.prototype.render = function ($playListElement, id) {
  $playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');

}

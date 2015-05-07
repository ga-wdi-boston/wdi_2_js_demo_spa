//create a namespace

var Spotify = Spotify || {};

//1. Constructor function for songs. this is used in the play_list.js file to build
//song objects and push them to the array

Spotify.Song = function(songTitle, songDuration, songPrice, songArtist){
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist
}

//2. When we start the render function in play_list.js we pass each song to this function.
//   this will, for each time it is run, append a new id'd <li> to the specified <ul>

Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');
}

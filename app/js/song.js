// Create namespace
var Spotify = Spotify || {};

// 10. The Song constructor below is used each time the push method is
// called within the getSongs method (in play_list.js)
Spotify.Song = function(songTitle, songDuration, songPrice, songArtist) {
  // 11. The constructor accepts four arguments and creates four properties
  // for each Song object **(next go to play_list.js)**
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
};

// 18. Render method below called on via forEach within render method in playList
// The method takes two args
Spotify.Song.prototype.render = function($playListElement, id){
  // The $playListElement jQuery element (assigned to ul with
  // id #spotify-songs in steps 3-4) has an append method called on it.
  // The append method is rendering the song into the HTML, specifically extracting
  // id and title, along with li tags to wrap each song in
  $playListElement.append('<li id="song-' + id + '" >' + this.title + '</li>');
}




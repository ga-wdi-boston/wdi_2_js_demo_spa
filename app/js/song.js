// create namespace

var Spotify = Spotify || {};

// create a constructor function for song
Spotify.Song = function(songTitle, songPrice, songDuration, songArtist) {
this.title = songTitle;
this.price - songPrice;
this.duration = songDuration;
this.artist = songArtist;
}

// this will render this song to html
// this represents them in html
Spotify.Song.prototype.render = function($playListElement, id) {
$playListElement.append('<li id="song-' + id + '">' + this.title + '</li>');
}


var mySong = new Spotify.Song('Shoe', 1.99, 245, 'Tom');

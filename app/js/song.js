//create a namespace
var Spotify = Spotify ||{};

//Create a constructor function for songs. It will take a set of values that we use for each song. Constructors are good for applying a funciton to a lot of things
//Constructor function uses 'this'---sets this object's property
Spotify.Song = function(songTitle, songDuration, songPrice, songArtist){
  this.title = songTitle;
  this.duration = songDuration;
  this.price = songPrice;
  this.artist = songArtist;
}


//#9 returns from playlist #8 to html page
//This will render this song to HTML
//for accessor functions in constructors you need the .prototype
//for all methods on an object that was created from a contructor function, use .prototype
Spotify.Song.prototype.render = function($playListElement, id){
  $playListElement.append('<li id=song-"' + id + '">' + this.title + '</li>');
}

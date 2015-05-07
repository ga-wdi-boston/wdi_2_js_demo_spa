/* Global Spotify */

// If Spotify does not have a value, then
// give is a value of {}, an Object Literal.
var Spotify = Spotify || {};

// The Spotify object's playlist is a different Object Literal.
Spotify.PlayList = {
  getSongs: function(){
    alert("in playlist get songs");
    var songs = [];
    // push an object that represents a Song
    // into the local song array.
    songs.push(new Spotify.Song('Lost Cause', 1.99, 183, 'Beck'));
    songs.push(new Spotify.Song('Teen Spirit', 1.49, 234, 'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love', 2.49, 204, 'Led Zep'));
    songs.push(new Spotify.Song('Another Song', 3.49, 503, 'Pink Floyd'));
    return songs;
  },
  // Initialize the Playlist.
  init: function(appPlayListElement){
    // set the DOM Element for the playlist.
    this.$playListElement = appPlayListElement;
    // return all the playlist songs.
    return this.getSongs();
  },
  render: function(songs){
    var id = 1;
    songs.forEach(function(song){
      song.render(this.$playListElement, id);
      id++;
    }, this)
  }
};

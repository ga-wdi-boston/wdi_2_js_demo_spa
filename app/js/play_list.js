/* global Spotify */
// If Spotify does not have a value (exist) give it a value of {}
var Spotify = Spotify || {};

// The Spotify object's "Playlist" property is a different object literal
Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    //push an objet that represents a Song into the local songs array
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
    songs.push(new Spotify.Song('Smells Like Teen Spirit', 183, 1.99, 'Nirvana'));
    songs.push(new Spotify.Song('Head Like a Hole', 183, 1.99, 'Nine Inch Nails'));
    return songs;
  },

  init: function(appPlayListElement){
    this.$playListElement = appPlayListElement;
    return this.getSongs();
  },

  render: function(songs){
    var id = 1;
    songs.forEach(function(song){
      song.render(this.$playListElement, id);
      id++;
    }, this);
  }

};

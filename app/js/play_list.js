/* global Spotify */

// If Spotify does NOT have a value
// then give it a value of {}, an object literal
var Spotify = Spotify || {};

// The Spotify object's "Playlist" property is a different
// object literal
Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    // push an object that represents a Song into the 
    // local songs array
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99,'Beck'));
    songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love', 204, 2.49, 'Led Zeppelin'));
    songs.push(new Spotify.Song('Mother', 503, 3.49, 'Pink Floyd'));
    return songs;
  },

  // initialize the Play list
  init: function(appPlayListElement){
    // 3. Set the playlist $playListElement to the ul in the html.
    
    // set the DOM Element for the play list
    this.$playListElement = appPlayListElement;
    // return all the playlist songs
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
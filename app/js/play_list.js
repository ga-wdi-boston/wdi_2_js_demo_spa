/* global Spotify */

// This will create one global variable for our app.
// It will act as a namespace for our application.
// If spotify does not have a value than give it a value of an object.

var Spotify = Spotify || {};


// The Spotify object's "Playlist" property is a different object literal.

Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    // Push an object that represents a song into the local songs array.
    // Push is an operation on array.
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99,'Beck'));
    songs.push(new Spotify.Song('Teenage spirit', 243, 1.09,'Nivarna'));
    songs.push(new Spotify.Song('Whole lotta love', 203, 2.99,'Zeppelin'));
    songs.push(new Spotify.Song('Mother', 605, 1.49, 'Pink Floyd'));
    return songs;
  },
  init: function(appPlayListElement){
    this.$playListElement = appPlayListElement;
  // Return all the playlist songs.
    return this.getSongs();
  },
  render: function(songs){
    var id = 1;
    songs.forEach(function(song){
    song.render(this.$playListElement, id);
     id++;
     });
  }
};

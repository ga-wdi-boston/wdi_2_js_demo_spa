/* global Spotify */

// 5. if spotify is undefined
// give it a value of an object literal
var Spotify = Spotify || {};

// 6. The Spotify object's "Playlist" property is a different object literal
Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
// 7. Create the 4 objects (4songs) and push them to the songs array
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99, "Beck"));
    songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, "Nirvana"));
    songs.push(new Spotify.Song('Whole lotta love', 2.99, 204, "Zepplin"));
    songs.push(new Spotify.Song('Mother', 605, 1.49, "Pink Floyd"));

// push an object that represents a song into the local songs array
    // songs.push({title: 'Lost Cause', price: 1.99, duration: 183, artist: 'Beck'});
    // songs.push({title: 'Teen Spirit', price: 1.49, duration: 234, artist: 'Nirvana'});
    // songs.push({title: 'Whole lotta love',  price: 2.99, duration: 204,artist: 'Zeppelin'});
    // songs.push({title: 'Mother', price: 1.49, duration: 605,  artist:'Pink Floyd'});
return songs;
  },
  // 8. Create an init function to run each song in the songs array into the playlist
  init: function(appPlayListElement){
    this.$playListElement = appPlayListElement;
    // set the DOM element for the playlist
    // returns an array of songs
    return this.getSongs();
  },
  // 9. For each song in the songs array, add it to the Playlist object and add an ID
  render: function(songs){
    var id =1;
    songs.forEach(function(song) {
      song.render(this.$playListElement, id); id++;
      //this.$playListElement.append('<li>' + song.title + '</li>');
    }, this)
  }
};

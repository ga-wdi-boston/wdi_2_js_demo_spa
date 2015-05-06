/* global Spotify */

//if spotify is null,
// then give it value of empty object
var Spotify = Spotify || {};

// spotify object's playlist property is a
// different object literal
Spotify.Playlist = {

  getSongs: function(){
    // 5. declare empty array, push new Spotify.Song objects into songs array

    var songs = [];
     // push an object that represents a song
     // into the local songs array
    songs.push(new Spotify.Song('Lost Cause', 183, 199, 'Beck'));
    songs.push(new Spotify.Song('sdfsdf', 183, 199, 'ddd'));
    songs.push(new Spotify.Song('Lffs', 183, 199, 'www'));

    // 7. returning the array songs which contains 3 objects (with 4 properties)
    return songs;
  },

  init: function(appPlaylistElement){
    // 3. set this.$playlistelement to the input parameter (html <ul> selector)

    this.$playListElement = appPlaylistElement;
    // return all the playlist's songs
    // 4. invoke getSongs() on the Playlist
    return this.getSongs();
  },
  render: function(songsArray){
    // 9. set id
    var id = 1;
    // 10. go through each element in songsArray one by one and...
    songsArray.forEach(function(song){
      // 11 do a thing to the song
      // render each song and it's ID by invoking render method with arguments this.$playListElement (DOM element), id
      song.render(this.$playListElement, id);
      id++;
      debugger;

    }, this);
  }

}

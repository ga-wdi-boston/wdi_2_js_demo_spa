/*Global Spotify*/

//If Spotify does NOT have a value then give it a value of an object literal
var Spotify = Spotify || {};

//The Spotify object's "Playlist" property is a different object literal
Spotify.Playlist = {
  getSongs: function() {
    //5. Declare empty array and push new Spotify.Song object into songs array
    var songs = [];
    //push an object that represesents a song into the local songs array
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
    songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
    songs.push(new Spotify.Song('Mother', 204, 2.99, 'Pink Floyd'));
    songs.push(new Spotify.Song('Everyday', 312, 1.59, 'The Doors'));

    //7.returning the array songs which contains 3 objects (with 4 properties)
    return songs;
  },
  //initializes the playlist
  init: function(appPlaylistElement) {
    //3. set the DOM element for the playlist to the input parameter (html <ul> selector)
    this.$playlistElement = appPlaylistElement;
    //return all the playlist songs
    //4. Invoke getSongs() on the playlist
    return this.getSongs();
  },

  render: function(songsArray) {
    //9.created a variable id and set its value to 1
    var id =1;
    //10. Go through each element in songsArray one by one...
    songsArray.forEach(function(song) {
      //11. Render each song and it's id by invoking the render method with arguments $playlistElement (DOM element), id
      song.render(this.$playlistElement, id);
      id++;
    }, this)
  }
  };


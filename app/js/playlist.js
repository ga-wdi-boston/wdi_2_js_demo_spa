/* global Spotify, $ */
var Spotify = Spotify || {};
Spotify.Playlist = {
  // 5. Do everything below
  getSongs: function(){
    // 5.a. Declare Empty Array
    var songs = [];
    // 5.b. Push all songs below into that array
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
    songs.push(new Spotify.Song('Smells Like Teen Spirit', 234, 1.49, 'Nirvana'));
    // 7. return the array of songs
    return songs;
  },

  init: function(appPlaylistElement){

    // 3. set Spotify's jquery element (playLIstElement) to the element passed to the init function (DOM ELEMENT).

    this.$playListElement = appPlaylistElement;
    // 4. Invoke getSongs() on the Playlist
    return this.getSongs();
  },

  datRender: function(songs){
    // 9. Set id
    var id = 0;
    // 10. Go thorugh each element in songsArray one by one and do a thing
    songs.forEach(function(song){
      // 11. Do a thing to the song in songsArray. Render each song and its ID.
      song.render(this.$playListElement, id);
      id++;
    }, this);
  }
};

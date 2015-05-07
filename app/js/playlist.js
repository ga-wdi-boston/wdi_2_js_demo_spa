/*global Spotify */


// If Spotify does NOT have a value
// then give it a value {}, an object literal
var Spotify = Spotify || {};

// The spotify object's "playlist" property is a different
//object literal
Spotify.Playlist = {
  getSongs: function (){
    //5. declare empty array, push new spotify.song object into song array

    var songs = [];
     // push an object that represents a Song into the
     // local songs array
     songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
     songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
     songs.push(new Spotify.Song('Whole Lotta Love', 204, 2.49, 'Led Zeppeline'));
     songs.push(new Spotify.Song('Mother', 503, 3.49, 'Pink Floyd'));


    // 7. returning the array songs which scontains 3 objects (with 4 properties)
     return songs;
       },


  //initalizes the play list
  init: function(appPlayListElement){
    // 3. set this .$playlistelement ot the input parameter (html < ul> selector)
    this.$playListElement = appPlayListElement;


    // return all the playlist songs
    // 4. Invoke getSongs();
return this.getSongs();

  },

  render: function(songsArray){
    // 9. set id
    var id = 1;
    //10. go through each element in songArray one by one and ...
    songsArray.forEach(function(song){
      // 11. do a thing to the song
      // render each song and its ID
    song.render(this.$playlistElement, id);
    id++;

    debugger;
  }, this);

  }

};

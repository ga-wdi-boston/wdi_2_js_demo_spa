/* global Spotify */

//only global variable in this code. If spotify does not have a value then give it a value of {}, the empty object literal
var Spotify = Spotify || {};

//the spotify object's "playlist" property is a different object literal
Spotify.PlayList = {
  //defining a method getsongs


  getSongs: function() {
    // 5. Declare empty array, and push the new Spotify.Song objects into the songs array

    //alert("in playlist get songs");
    var songs = [];
    //push an object that represents a Song into the local songs array
    //each song is an object literal
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
    songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love', 204, 2.49, 'Led Zeppelin'));
    songs.push(new Spotify.Song('Mother', 503, 3.49, 'Pink Floyd'));

    // 7. returning the array of songs, which contains the four objects we added to it (with 4 properties each)
    return songs;
  },

  //create another method, the init method to initialize the playlist
  //being pointed to a dom element (the ul list in index.html)
  //the $ is a jquery convention
  init: function(appPlayListElement) {
    //3. Set this.$playlistElement to the input parameter(html <ul> selector)

    //set the DOM element for the playlist
    this.$playListElement = appPlayListElement;

    //4. invoke getSongs on this (the playlist)
    //return all the playlist songs
    return this.getSongs();
  },

  //render is considered an object but it is a method on playList
  render: function(songsArray) {
    // 9. Set id
    var id = 1;

    // 10. Go through each element in songsArray one by one and ...
    songsArray.forEach(function(song) {

      // 11. Render each song (in HTML) and its id by invoking render method with arguments this.$playListElement (DOM element) and id
        song.render(this.$playListElement, id);
        id++;
      //append a list element that has a song title in it to the playList element in our HTML
      //this. is referring to the playList
      //this.$playListElement.append('<li >' + song.title + '</li>');
    }, this)
  }

};

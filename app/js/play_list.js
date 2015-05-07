/* global Spotify */


//If Spotify does not have a value, then give it a value of {}, an object literal
//Spotify in this case is undefined, which is false-- so this statement evaluates to the next statement of {} which is truthy
var Spotify = Spotify || {};

//Give empty object literal {} a property of Playlist
//The spotify object's "Playlist" property is a different object literal
Spotify.PlayList = {
  //5. Declare songs to be an empty array, push our new Spotify.Song objects into songs array
  getSongs: function(){
    var songs = [];
    //push an object that represents a song into the
    //local songs array
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
    songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love', 204, 2.49, 'Led Zepplin'));
    songs.push(new Spotify.Song('Mother', 503, 3.49, 'Pink Floyd'));
    //7. Returning the array songs which contain four objects which each have four properties
    return songs;
  },
  //initializes the Play list
  init: function(appPlayListElement){
    //3. Set this.$playListElement to the input paramater (<ul> selecter)
    //set the DOM element for the playlist
    this.$playListElement = appPlayListElement;
    //4. Invoking getSongs on the playlist
    //return all the playlist songs
    return this.getSongs();
  },


  render: function(songsArray){
//9. Set id
    var id = 1;
//10. Loop through every song in the songArray (allsongs)
    songsArray.forEach(function(song){ //forEach gives each individual object
//11. Do a thing to a song
//render each song and its ID by invoking render method with arguments this.$playListElement (DOM element), id
      song.render(this.$playListElement, id);
      id++;
    }, this)
  }
};

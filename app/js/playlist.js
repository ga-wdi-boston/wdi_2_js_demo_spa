/*Global Spotify*/

//Our only global variable
//Look for Spotify and if it doesn't it will be undefined, which is false, and this will be an or and it will return the empty Hash.
//If SPotify does not have a value then give it a value of{}, an object
//Now spotify is an empty object
var Spotify = Spotify || {};

//The Spotify object's "Playlist" property is a different object literal
//#5 creates an empty array of songs. Talks to the constructor in song.js
Spotify.PlayList = {
  getSongs: function(){
    var songs = [];
    //#6. getSongs pushes an object that presents a song into the local songs array
    songs.push(new Spotify.Song('Lost Cuase', 183, 1.99, 'Beck'));
    songs.push(new Spotify.Song('Teen Spirit', 145, 1.49,'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love', 204, 2.49, 'Led Zepplin'));
    songs.push(new Spotify.Song('Mother', 503, 3.49, 'Pink Floyd'));
    //#7 return songs to line 36
    return songs;
  },

  //#3 set the playlist and save it on the playlist and call get songs which goes to run line 11 getSongs
  //$ is a convention of a Jquery object. It is used in the title of a variable
  // init is another method, initializes the playlist
  init: function(appPlayListElement){
    //Set the DOM element for the playlist
    //playListElement is in our html
    this.$playListElement = appPlayListElement;
    // return all the playlist songs
    // get songs builds an array of songs
    // #4. Invoke getSongs above
    return this.getSongs();
  },

//#8 for every song in the songs array we invoke the forEach anonymous function. Next goes to song.js.
  render: function(songs){
    var id= 1;
    //forEach iterates over the array and for each song it appends/adds it to the array
    songs.forEach(function(song){
      //calling the function from the song.js
      //call the render methos which passes in the DOM element and an ID
      song.render(this.$playListElement, id);
      id++;
      //use the outer this as the inner this
    }, this)
  }
};

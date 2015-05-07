/* global Spotify*/


//if no spotify, then give it this object literal value.

var Spotify = Spotify || {

};

// the Spotify objects playlist

Spotify.PlayList = {

//creates array of songs

  getSongs: function(){
    alert("in playlist get songs")
    var songs = [];
    //push an object that represents a song into the songs array
    songs.push(new Spotify.Song('lost cause', 183, 1.99, 'beck'));
    songs.push(new Spotify.Song('lost cause', 183, 1.99, 'beck'));
    songs.push(new Spotify.Song('lost cause', 183, 1.99, 'beck'));
    songs.push(new Spotify.Song('lost cause', 183, 1.99, 'beck'));
    return songs;
  },

  init:function(appPlayListElement){
    //1.a. Here is where we set the DOM element for playlist to append to
    this.$playListElement = appPlayListElement;
    //1.b. And here is where we get ou list of songs that we will manipulate later
    return this.getSongs();
  },

  render: function(songs){
    var id = 1;
    //2. We now loop through each song, and feed each into the song.render function
    //   specified in song.js. find more notes there.
    songs.forEach(function(song){
      song.render(this.$playListElement, id);
    // The result of all of this is a list of <li> </li> elements appended to the <ul>
    // we specified. we also added an id to each song for indexing and easy search.
      id++;
    }, this)
  }
};


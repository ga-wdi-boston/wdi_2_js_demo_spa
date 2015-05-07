// Global Spotify //

// If Spotify does NOT have a value
// then give it a value of {} an object literal
var Spotify = Spotify || {};


// The Spotify object's "Playlist" property is a
// different object literal
Spotify.PlayList = {

  // 7. The getSongs method is called via the init method (#6 below)
  getSongs: function () {

    // 8. A new local var called songs is initialized as an empty array
    var songs = [];

    // 9. The songs array is populated with new objects being
    // pushed in one by one via a song constructor **(next go to song.js)**
    songs.push(new Spotify.Song('Lost Cause',1.99,183,'Beck'));
    songs.push(new Spotify.Song('Teen Spirit',234,1.49,'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love',204,2.49,'Led Zeppelin'));
    songs.push(new Spotify.Song('Mother',503,3.49,'Pink Floyd'));

    // 12. Once all Songs are constructed and pushed into local songs array,
    // the songs array is returned from the function
    return songs;
  },

  // 4. Initializes init function with one arg
  init: function (appPlayListElement) {

    // 5. Sets the DOM Element for the playlist
    // (as passed thru songs var in app.js, then to appPlayListElement)
    this.$playListElement = appPlayListElement;

    // 6. Returns all the playlist songs by calling on the getSongs method
    return this.getSongs();
  },

  // 15. Render method called from app.js, with songs passed as arg
  // (this is the songs array stored in var songs in app.js, those that were
  // returned from the getSongs method above)
  render: function(songs){
    // 16. var id initialized at 1, will be incremented as forEach below
    // is run on each song object in the songs array
    var id = 1;
    // 17. forEach method called on songs array with anonymous function
    songs.forEach(function(song){
      // 18. forEach's anonymous function called on render method **in songs.js**
      song.render(this.$playListElement, id);
      id++;
    }, this)
  }

};

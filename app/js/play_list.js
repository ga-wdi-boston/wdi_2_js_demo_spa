/* global Spotify */

// if Spotify does not have a value then give it a value of
// {} an object literal.
var Spotify = Spotify || {};

// the Spotify object's "Playlist" property is a different object literal.
Spotify.PlayList = {
  getSongs: function() {
    // 5. define songs to be an emtpy array
    var songs = [];
    // 8. push the songs into the array using the constructor defined inside song.js and return all the songs in the variable set in step 5.
    // push the songs using the constructor
    songs.push(new Spotify.Song('Lost Cause', 183, 1.99, 'Beck'));
    songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love', 204, 2.49, 'Led Zeppelin'));
    songs.push(new Spotify.Song('Mother', 503, 3.49, 'Pink Floyd'));
    return songs;
  },
  // initialize the Play list
  init: function(appPlayListElement){
    //set the DOM element for the playlist
    //3. set the playlist $playListElement to the ul of the html
    this.$playListElement = appPlayListElement;
    // 4. invoke getsongs above
    // return all the playlist songs
    return this.getSongs();
  },

  // 10. I call the function "render" plugging all the songs from point 5.
  // This function sets a variable id and sets it to an initial value of 1.
  // then I iterate over the songs of the array (referring to them from what I set in the init function) and
  // incrementing the id by one.
  render: function(songs) {
    var id = 1;
    songs.forEach(function(song){
      song.render(this.$playListElement, id);
      id++;
    }, this)
  }


};

/* global Spotify */

// in Tom's words: if spotify does NOT have a value
// then give it a value of {}, an object literal
var Spotify = Spotify || {};

// the Spotify object's "Playlist" property is a different object // literal

// so far we have an object literal "Spotify"
// inside that object literal, there is another object literal
// that has one property called "getSong"
// that has a value of a function
Spotify.PlayList = (function() {

    // define a private variable named "allSongs"
    // and set it's value to be an empty array
    var _allSongs = [];
    // a private variable, the value will be the <ul>
    var _$playListElement;

    function _getSongs() {
      _allSongs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
      _allSongs.push(new Spotify.Song('Lost Cause', 1.99, 183, 'Beck'));
      _allSongs.push(new Spotify.Song('Whole Lotta Love', 2.49, 204,'Led Zepplin'));
    };
    // define a private method name _init
    function _init(appPlayListElement) {
      _$PlayListElement = appPlayListElement;
      _getSongs();

    };
    // define a private method name _render
    function _render() {
      var id = 1;
    _allSongs.forEach(function(song) {
      song.render(_$PlayListElement, id);
      id++;
    }, this);
    };
  // playlist is now a function that returns an object literal
    return {
      init: _init,
      render: _render,
      getSongs: _getSongs

  }
 })();


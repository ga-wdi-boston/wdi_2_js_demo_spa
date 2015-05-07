/*global Spotify, $ */
'use strict';
//If 'Spotify' doesn't already have a value, give it a value of an empty object literal.
var Spotify = Spotify || {};

//The Spotify object's 'Playlist' property is a different object literal.
Spotify.PlayList = (function(){
// Define a private variable named _allSongs,
// Set its value to be an empty array
  var _allSongs = [],
  _$playListElement; //a private variable, the value will be the <ul>

    function _getSongs(){
  }

  _getSongs: function() {
    var songs = [];
    $playListElement;

    _allSongs.push.(new Spotify.Song ('Lost Cause', 1.99, 183, 'Beck'));
    _allSongs.push.(new Spotify.Song ('Smells', 1.99, 183, 'Beck'));
    _allSongs.push.(new Spotify.Song ('Firework', 1.99, 183, 'Katy Perry'));
    _allSongs.push.(new Spotify.Song ('Mother', 1.99, 183, 'Pink Floyd'));
  }

//define a private method name _init
  function _init(){
    _$playListElement= appPlayListElement;
    _getSongs();
  }

  function _render(){
    var id = 1;
    _allSongs.forEach(function(song {
      song.render(_$playListElement, id);
      i++;
    }, this);
  };

  return {
    init: _init,
    render: _render,
  }
})();





    //push an object that represents an Song into the local songs array
    //   songs.push({title: 'Lost Cause', price: 1.99, duration:183, artist: 'Beck'});
    //   songs.push({title: 'Smells Like Teen Spirit', price: 1.49, duration:234, artist: 'Nirvana'});
    //   songs.push({title: 'Firework', price: 0.50, duration: 150, artist: 'Katy Perry'});
    //   songs.push({title: 'Mother', price: 3.49, duration: 503, artist: 'Pink Floyd'});
    //   return songs;
    // },
  //initialize the PlayList
  init: function(appPlayListElement) {
    _$playListElement = appPlayListElement;
    //return all the playList songs
    _getSongs();
  },

  function render(songs){
      var id = 1
      _allSongs.forEach(function(song){song.render(_$playListElement, id);
        i++
        )};
    }, this);
  };
};

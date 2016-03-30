 /* global Spotify */
'use strict';
 //if spotify does not have a value
 //then give it a value of {} an object literal
 var Spotify = Spotify|| {};

//the spotify object "Playlist" property
//is a different object literal
Spotify.PlayList = (function(){

  //define a private variable named _allSongs
  //and set it to an empty array
  var _allSongs = [],
  _$playListElement;

  //define a private method named _init
  function _getSongs(){
    _allSongs.push(new Spotify.Song('Lost Cause',1.99, 183,'Beck'));
    _allSongs.push(new Spotify.Song('Teen Spirit',1.49,234,'Nirvana'));
    _allSongs.push(new Spotify.Song('Whole Lotta Love',2.49,204,'Led Zeppelin'));
    _allSongs.push(new Spotify.Song('Mother', 3.49,583,'Pink Floyd'));
  }

  function _init(appPlayListElement){
    _$playListElement = appPlayListElement;
    _getSongs();
  }

  //define a private method name _render
  function _render(){
    var id = 1;
    _allSongs.forEach(function(song){
      song.render(_$playListElement,id);
      id++;
    })
  }
  return{
    init: _init,
    render: _render
  }
 })();

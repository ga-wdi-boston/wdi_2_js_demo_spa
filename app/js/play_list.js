 /* global Spotify */
'use strict';
 //if spotify does not have a value
 //then give it a value of {} an object literal
 var Spotify = Spotify|| {};

//the spotify object "Playlist" property
//is a different object literal
Spotify.PlayList = {
  //3. getSongs() is function that returns an array of songs
  getSongs:function(){
    var songs = [];
    //push object that represents a Song into the local songs array
    songs.push(new Spotify.Song('Lost Cause',1.99, 183,'Beck'));
    songs.push(new Spotify.Song('Teen Spirit',1.49,234,'Nirvana'));
    songs.push(new Spotify.Song('Whole Lotta Love',2.49,204,'Led Zeppelin'));
    songs.push(new Spotify.Song('Mother', 3.49,583,'Pink Floyd'));
    return songs;
  },
  //2. initialize the playlist which functino has to getSongs()
  init: function(appPlayListElement){
    //set the DOM Element for the play list
    this.$playListElement = appPlayListElement;
    //return all the pllaylist songs
    return this.getSongs();
  },
  //render is a function that adds each song to html
  render: function(songs){
    var id = 1;
    songs.forEach(function(song){
      song.render(this.$playListElement,id);
      id++;
    },this);
  }

 };

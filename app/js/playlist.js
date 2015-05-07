'use strict';

/* global Spotify */
//If spotify does not have a value then give it a value of object
var Spotify = Spotify || {};
//the spotify object's playlist property is a different object literal
Spotify.PlayList={
  ///we want to hide getSongs so the users/client side cannot change it
          getSongs: function(){
            var songs =[];
            songs.push(new Spotify.Song('Lost cause',1.99, 183,'Beck'));
            // songs.push({title:'Lost cause', price:'1.99', duration: 183,artist: 'Beck'});
            // songs.push({title: 'Teenage spirit', duration: 243, price: 1.49, artist:'Nivarna'});
            // songs.push({title: 'Whole lotta love', duration: 203, price: 2.49, artist: 'Zeppelin'});
            // songs.push({title: 'Mother', duration: 605, price: 3.49, artist:'Pink Floyd'});
            return songs;
          },

          init:function(appPlaylistElement){
            this.$playListElement = appPlaylistElement;
              // return all playlist songs
            return this.getSongs();

          },
////song id should not be a responsibility of this function
          render: function(songs){
            var id = 1;
            songs.forEach(function(song){

                  song.render(this.$playListElement,id);
                  id++;
            },this);
          }
};


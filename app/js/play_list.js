// global spotify

//if spotify does not have a value
//then give it a value of {}, an object literal
var Spotify = Spotify || {};

//the Spotify object "Playlist" property is a different
//object literal
Spotify.PlayList = {
  getSongs: function (){
//5. declare empty array, push new Spotify.Song objects into songs array
    var songs = [];
    //push an oject that represents a song into the local songs array
    songs.push(new Spotify.Song('lost Cause', 183, 1.99, 'beck'));
    songs.push(new Spotify.Song('Teen Spirit', 234, 1.49, 'Nirvana'));
    songs.push(new Spotify.Song('Whole lotta Love', 204, 2.49, 'Led Zeppelin'));
    songs.push(new Spotify.Song('Mother', 503, 3.49, 'Pink Floyd'));
    //7. returning the array songs which contains 4 objects with 4 properties
    return songs;
  },
  //initialize the playlist

  init: function(appPlaylistElement){
  //3. set the playlist $playListElement to the ul in the html(input parameter).
//set the DOM element for the playlist
    this.$playListElement = appPlaylistElement;
//return all playlist songs
//4. invoke getSongs() on playlist
    return this.getSongs();

},

render: function(songsArray){
//9. set id
  var id = 1
//10. go through each element in songsArray one by one and..
  songsArray.forEach(function(song){
//11. do a thing to the song
//render each song and it's id by invoking render method with arguments this.$playListElement (DOM element), id
    song.render(this.$playListElement, id);
    id++;
  }, this)

}


};

// create a namespace


var Todo = Todo || {};

//constructor function for songs
Todo.Task = function(title, description, id, status){
  this.title = title;
  this.description = description;
  this.taskId = id;
  this.status = status;
  };

//this will render this song to HTML
Todo.Task.prototype.render = function($playlistElement, id){
$playlistElement.append('<li id="song-'+ id +'">' + this.title + '</li>')

}




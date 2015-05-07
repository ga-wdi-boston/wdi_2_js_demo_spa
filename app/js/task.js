//create a namesapce

var Todo = Todo || {};

//Constructor function for song
Todo.Task = function(taskTitle, taskDescription){
  //6. Constructing the song object
  this.title = taskTitle;
  this.description = taskDescription;
}


//This will render this song to HTML
Todo.Task.prototype.render = function(listElement, id){
  listElement.append('<li id="task-' + id + ' ">' + this.title + '</li>');
}

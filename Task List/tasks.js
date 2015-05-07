// create a namespace
var todo = todo || {};

// Constructor function for songs
todo.task = function(taskTitle, taskDescription, taskID, taskStatus) {
  this.title = taskTitle;
  this.description = taskDescription;
  this.id = taskID;
  this.status = taskStatus;
};

// This will render this song to HTML
todo.task.prototype.render = function($listElement, id) {
  $listElement.append('<li id="task-' + id + '">' + this.title + '</li>');
}

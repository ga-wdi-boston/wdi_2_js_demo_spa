
var ToDoApp = ToDoApp || {};

ToDoApp.Task = function(taskTitle, taskDescription, taskStatus) {
  this.title = taskTitle;
  this.description = taskDescription;
  this.status = taskStatus;
};

ToDoApp.Task.prototype.render = function($listElement) {
  $listElement.append('<li>' + this.title + '</li>');
};

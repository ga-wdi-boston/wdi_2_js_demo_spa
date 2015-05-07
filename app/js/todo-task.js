var toDoAPP = toDoAPP || {};

toDoAPP.Task = function(taskTitle, taskDescription, taskStatus){
  this.title = taskTitle;
  this.description = taskDescription;
  this.status = taskStatus;
};

toDoAPP.task.prototype.render = function(
  $taskListElement, id){
  $taskListElement.append('<li id= "task-' + id +'">' + this.title + '</li>');

}

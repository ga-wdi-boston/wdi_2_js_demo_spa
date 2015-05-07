var Todo= Todo || {};

Todo.Task = function(taskTitle, taskID, taskDescription, taskStatus){
  this.title = taskTitle;
  this.taskID = taskID;
  this.taskDescription = taskDescription;
  this.taskStatus = taskStatus;
};

Todo.Task.prototype.render = function($taskListElement, id){
  $taskListElement.append('<li id="task-' + id + '">' + this.title + '</li>');
}

/* global Todo, $*/

var Todo = Todo || {};


Todo.Task = function(taskTitle, taskDescription, taskPriority){
  this.title = taskTitle;
  this.description = taskDescription;
  this.priority = taskPriority;
};


Todo.Task.prototype.render = function($TaskListElement) {
  $TaskListElement.append('<li id="task" style="font-size: 12pt;">' + this.title + ': ' + this.description +  '</li>');
  this.id =Todo.TaskList.tasks.indexOf(this.name);
}

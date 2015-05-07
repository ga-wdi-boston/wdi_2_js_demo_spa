/* global Todo, $*/

var Todo = Todo || {};

// 6.b. assign various titles, descriptions, priorities to a new Task object.
Todo.Task = function(taskTitle, taskDescription, taskPriority){
  this.title = taskTitle;
  this.description = taskDescription;
  this.priority = taskPriority;
  this.status = 'Not Started'
};


Todo.Task.prototype.render = function($TaskListElement) {
  //11. Append to the DOM object a list element with the id of task.
  $TaskListElement.append('<li id="task" style="font-size: 12pt;">' + this.title + ': ' + this.description +  '</li>');
  //12. set the ID to the index of this task name
  this.id =Todo.TaskList.tasks.indexOf(this.name);
}

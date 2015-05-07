var Todo = Todo || {};

Todo.Task = function(taskTitle, taskDescription) {
  // 6. Construct the new Task object
  this.title = taskTitle;
  this.description = taskDescription;
};

// 12. Perform the render prototype method on each task object in the task array
Todo.Task.prototype.render = function($listElement) {
    $listElement.append('<li >' + this.title + '</li>');
};

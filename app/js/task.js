var ToDoList = ToDoList || {};

// 6 the tasks are created with this constructor
ToDoList.Task = function(title, description) {
  this.title = title;
  this.description = description;
}

// 7 I add a method render to the object constructor Task.

// 11. this is also the final step, of sending back (appending) to the DOM.
ToDoList.Task.prototype.render = function($taskListElement, id) {
  $taskListElement.append('<p id="task-' + id + '"><input type="checkbox">' + this.title + '</p>');
}

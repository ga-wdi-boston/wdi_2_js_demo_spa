//create a namespace
var ToDoList = ToDoList || {};

//Create a constructor function for tasks. It will take a set of values that we use for each task. Constructors are good for applying a funciton to a lot of things
//Constructor function uses 'this'---sets this object's property
ToDoList.Task = function(taskTitle, taskDescription){
  this.title = taskTitle;
  this.description = taskDescription;
}


//#9 returns from tasklist #8 to html page
//This will render this task to HTML
//for accessor functions in constructors you need the .prototype
//for all methods on an object that was created from a contructor function, use .prototype
ToDoList.Task.prototype.render = function($taskListElement, id){
  $taskListElement.append('<p id="task-' + id + '"><input type="checkbox">' + this.title + '</p>');
}

/* global ToDoList, $*/
'use strict';
// 1. Loading the file, linked into the index_todo.html, as well as the link to task.js and task_todo.js
$(document).ready(function(){
  console.log('Time to build a list of tasks on your To Do List');


  //2. we initialize the tasklist and assign the DOM id="todo-items" and put it into the variable tasks
  var taskDomElement = $('#todo-items');
  var tasks = ToDoList.TaskList.init(taskDomElement);

  // 9. I invoke the render method on the playlist object passing the tasks as argument.
  ToDoList.TaskList.render(tasks);
});

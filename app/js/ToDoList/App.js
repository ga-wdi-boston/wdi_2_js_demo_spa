/* global toDoList */
'use strict'
// 1. log something
$(document).ready(function() {
  console.log('Time to build a tasklist for meeee')
// 2. Get the DOM element of 'tasks' and pass it to the init method for toDoList.taskList
  var tasks = toDoList.taskList.init($('#tasks'));
  // Invoke the toDoList taskList render method for the array tasks
  toDoList.taskList.render(tasks);
});

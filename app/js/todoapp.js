/* global Todo, $*/
'use strict';

$(document).ready(function() {

  // 1. Log a message when jQuery is loaded
  console.log('Time to make a To-do list');

  // 2. Invoke the to-do list init method on the To-do list and set variable list items to the output
  var tasks = Todo.List.init($('#todo-tasks'));

  // 8. var tasks is now an array and I pass the array to the render method, to invoke the render function with the array as an argument
  Todo.List.render(tasks);
});

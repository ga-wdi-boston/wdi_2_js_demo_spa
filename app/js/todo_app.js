'use strict';

$(document).ready(function() {

  // 1. Logging a message to the console
  console.log('Building a to-do list');

  // 2. Get DOM element with id of #todoapp-tasks
  // 3. Pass it as argument to init method in ToDoList object
  // **(next go to todo_list.js)**
  // 13. Now the tasks from the todo_list tasks array live in var allTasks
  var allTasks = ToDoApp.ToDoList.init($('#todoapp-tasks'))


  // 14. The render method in the ToDoList object within ToDoApp object
  // is called, with the value allTasks passed as the argument
  // **(next go to todo_list.js)**
  ToDoApp.ToDoList.render(allTasks);

}
  );

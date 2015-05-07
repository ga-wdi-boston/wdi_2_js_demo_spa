
// Invokes function.
$(document).ready(function(){
// Returning defined object.
  console.log('Time to build a task list');
// Establishing variable 'tasks'.
  var tasks = Todo.TaskList.init($('#todo-tasks'));
// Rendering the list's methods?
  Todo.Tasklist.render(tasks);
});

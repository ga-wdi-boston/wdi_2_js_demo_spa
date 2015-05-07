
$(document).ready(function() {
  var tasks = ToDoApp.Task.init($('#td-tasks'));
  ToDoApp.Task.render(tasks);
});

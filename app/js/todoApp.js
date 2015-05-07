/* gobal Todo, $ */
'use strict';

$(document).ready(function(){

  var tasks = Todo.List.init($('#todo-tasks'));

  Todo.List.render(tasks);

});

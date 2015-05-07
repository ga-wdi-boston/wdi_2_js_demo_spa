'use strict';
var Todo=Todo||{};

$(document).ready(function(){
  var todo = Todo.List.init($('#todo-tasks'));
  Todo.List.render(todo);
});

/* global Todo, $*/
'use strict';

$(document).ready(function(){
// invoke List init method and pass it the DOM element for the <ul>
  var tasks = Todo.List.init($('#todo-tasks'));
  Todo.List.render(tasks);

});

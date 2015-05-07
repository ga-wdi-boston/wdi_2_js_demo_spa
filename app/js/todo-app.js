'use strict';

$(document).ready(function(){

  console.log('Time to build a Task list for Todo');

  var tasklistDomElement = $('#TodoApp-tasks');

  var alltasks = TodoApp.TaskList.init($('#TodoApp-tasks'));

  TodoApp.TaskList.render(alltasks);

});


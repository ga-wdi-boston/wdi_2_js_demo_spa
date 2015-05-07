/* global Todo, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to do stuff');
  var todoDomElement = $('#todo');
  var allTasks = Todo.TaskList.init(todoDomElement);
  Todo.TaskList.render(allTasks);



  $('#getTask').click(function() {
    var tempValue = new Todo.Task($('#inputInfo').val(), $('#description').val());
    tempValue.render(todoDomElement);


  });
});


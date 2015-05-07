/* global Todo, $*/
'use strict';

$(document).ready(function(){

  // 1. Start off by logging that the document has been loaded and it's Time to do stuff!
  console.log('Time to do stuff');

  // 2. Set temporary variable with DOM element so that we're nice and pretty later
  var todoDomElement = $('#todo');
  // 3. invoke the TaskList's init function, passing the DOM element as the argument.
  var allTasks = Todo.TaskList.init(todoDomElement);
  // 8. Invoke Render on the now-stored list of tasks (allTasks).
  Todo.TaskList.render(allTasks);


// 13 these only happen if there's a click, but they add a new li element with name and description.
  $('#getTask').click(function() {
    var tempValue = new Todo.Task($('#inputInfo').val(), $('#description').val());
    tempValue.render(todoDomElement);


  });


$('li').click(function() {
  this.remove();
});

});


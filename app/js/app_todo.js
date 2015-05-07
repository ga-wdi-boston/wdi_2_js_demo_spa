/* global Spotify, $*/
'use strict';

//#1.Gets document ready by getting rid of Namespace
$(document).ready(function(){
  console.log('Time to build a list of tasks for your To Do List');


 //#2. calling the init method on the playlist and passing in the id todo-items. Next goes to playlist.js.
  var tasks = ToDoList.TaskList.init($('#todo-items'));
  ToDoList.TaskList.render(tasks);
});

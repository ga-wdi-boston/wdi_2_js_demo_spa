/* global Spotify, $*/
'use strict';

$(document).ready(function(){
  console.log('Time to build todo');
  var tasks = Todo.Tasklist.init($('#tasklist'));
  Todo.Tasklist.render(tasks);
});

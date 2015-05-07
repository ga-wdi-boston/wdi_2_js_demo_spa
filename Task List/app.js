'use strict';

$(document).ready(function(){
  console.log('Time to build a list of shit to do');

  var tasks = todo.list.init($('#tasks'));

  todo.list.render(tasks);
});

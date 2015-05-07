/*global Todo, $*/

$(document).ready(function(){

//1.Log message when jquery is loaded

//2. Invoke the playlist init method, pass it the DOM element for
  //for the ul for the playlist

var tasks = Todo.List.init($('#todo-tasks'));

//8. var tasks is now an array, and passed it to the render method
  //Invoke the Todo  render method
Todo.List.render(tasks);

});

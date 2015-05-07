/* global Todo, $*/

var Todo = Todo || {};


Todo.TaskList = {
  tasks: [],
  generateTasks: function(){
    // 6. Push 3 pre-determined tasks.
     // 6.a. create new instance of Todo.Task passing title and description to the  Task Constructor (task.js)
  this.tasks.push(new Todo.Task('Do Homework', 'work from GA', 2));
  this.tasks.push(new Todo.Task('Get Groceries', 'Lemonade, Cheese, Wine', 3));
  this.tasks.push(new Todo.Task('Movie', 'Go to the video store', 4));
  },
  addTask: function(title, description, priority){
    // debugger;
    this.tasks.push({
      'title': title,
      'description': description
    });
  },
  init: function(appTasklistElement){
    // 4. set Todo's javascript element (TasklistElement) to the element passed to the init function (DOM ELEMENT).
    this.$TasklistElement = appTasklistElement;
    // 5. Invoke generateTasks, passing no arguments.
    return this.generateTasks();
    // 7. Return this to the initial invocation
  },

  render: function(tasks){
    // 9. create a for loop to go through each item in the tasks array.
    var id=0;
    this.tasks.forEach(function(task){
      //10. Initialize the render function (prototype fo the Task object).
      task.render(this.$TasklistElement);
      id++
    }, this);

}};
